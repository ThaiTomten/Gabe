import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeState,craftSword,sellSword,advanceProduction,offlineCycles} from '../src/engine/economy.mjs';
import {blocked,safeSpawn,movePlayer} from '../src/engine/movement.mjs';
test('movement works in all directions and stops at zero input',()=>{
 const p={x:500,y:550};
 const moved=movePlayer(p,{x:1,y:-1},.05,170);
 assert.ok(moved.x>p.x&&moved.y<p.y);
 assert.deepEqual(movePlayer(p,{x:0,y:0},.05,170),p);
});
test('collision and safe spawn protect against building softlocks',()=>{
 const buildings=[{x:180,y:170,w:150,h:110}];
 assert.equal(blocked(200,200,buildings),true);
 assert.deepEqual(safeSpawn(200,200,buildings),{x:500,y:550});
 assert.deepEqual(movePlayer({x:165,y:200},{x:1,y:0},.05,170,buildings),{x:165,y:200});
});
test('crafting consumes ingredients and selling credits gold',()=>{
 let s={ore:2,wood:1,swords:0,gold:0,forge:1};
 let c=craftSword(s);assert.equal(c.crafted,true);
 assert.equal(c.state.ore,0);assert.equal(c.state.wood,0);
 let sale=sellSword(c.state);assert.equal(sale.state.gold,35);
 assert.equal(sale.state.totalGold,35);
});
test('automation cannot create materials from nothing',()=>{
 let s=advanceProduction({ore:0,wood:0,swords:0,gold:0,mine:1,forge:1,autoForge:true,autoSell:true,manager:false},100);
 assert.equal(s.gold,0);assert.equal(s.swords,0);
});
test('offline cycles capped and clock reversal ignored',()=>{
 assert.equal(offlineCycles(10000,20000),0);
 assert.equal(offlineCycles(36000000,0),5760);
});
test('old save normalization handles missing fields',()=>{
 const s=normalizeState({gold:100,mine:2});
 assert.equal(s.wood,0);assert.equal(s.mine,2);assert.equal(s.forge,1);
});
