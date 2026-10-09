import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Game script must exist');

function boot(saved=null){
 const listeners={}, elements={}, windowListeners={};
 let frame=null,now=1000;
 const context2d=new Proxy({createRadialGradient:()=>({addColorStop(){}})},{
  get:(obj,key)=>obj[key]??(()=>{})
 });
 function element(id){
  if(!elements[id]){
   elements[id]={
    style:{},textContent:'',innerHTML:'',clientWidth:390,clientHeight:500,
    getContext:()=>context2d,
    getBoundingClientRect:()=>({left:0,top:0,width:id==='joy'?112:390,height:id==='joy'?112:500}),
    setPointerCapture(){},contains(){return false},
    addEventListener(type,fn){(listeners[id]??={})[type]=fn}
   };
  }
  return elements[id];
 }
 const document={
  getElementById:element,
  documentElement:{style:{setProperty(){}}},
  body:{style:{}},
  addEventListener(type,fn){listeners['document']??={};listeners['document'][type]=fn}
 };
 const window={
  devicePixelRatio:1,innerHeight:800,visualViewport:null,
  addEventListener(type,fn){windowListeners[type]=fn},
  scrollTo(){}
 };
 const storage=new Map(saved?[['runeforge_alpha6',JSON.stringify(saved)]]:[]);
 const localStorage={getItem:key=>storage.get(key)??null,setItem:(key,val)=>storage.set(key,val)};
 const sandbox={document,window,localStorage,Math,Date,performance:{now:()=>now},
  requestAnimationFrame:fn=>{frame=fn},
  addEventListener(){},
  console:{error:err=>{throw err}},
 };
 vm.createContext(sandbox);
 vm.runInContext(script,sandbox,{timeout:3000});
 function advance(count=10){
  for(let i=0;i<count;i++){
   const callback=frame;assert.equal(typeof callback,'function','Game loop must continue');
   frame=null;now+=16;callback(now);
  }
 }
 return {sandbox,elements,listeners,advance,storage,element,state:()=>vm.runInContext('S',sandbox)};
}
test('game initializes and animation loop stays alive',()=>{
 const g=boot();g.advance(30);
 assert.match(g.element('moveStatus').textContent,/JOY/);
});
test('known-good pointer joystick moves player then stops on release',()=>{
 const g=boot({x:500,y:550});
 g.advance(2);
 const start=g.element('moveStatus').textContent;
 const h=g.listeners.joy;
 assert.ok(h.pointerdown&&h.pointermove&&h.pointerup,'Pointer controls registered');
 const event={pointerId:1,clientX:110,clientY:56,preventDefault(){},pointerType:'touch'};
 h.pointerdown(event);g.advance(20);
 const moving=g.element('moveStatus').textContent;
 assert.notEqual(start,moving);
 assert.match(moving,/JOY 100,0/);
 h.pointerup(event);g.advance(2);
 assert.match(g.element('moveStatus').textContent,/JOY 0,0/);
});
test('movement recovers from blocked save without deleting gold',()=>{
 const g=boot({x:200,y:200,gold:900,scene:'village'});
 g.advance(2);
 assert.match(g.element('moveStatus').textContent,/500,550/);
 assert.equal(g.state().gold,900);
});
test('gameplay actions and UI still work',()=>{
 const g=boot();
 g.sandbox.action('mine');g.sandbox.action('wood');g.sandbox.action('wood');g.sandbox.action('forge');
 assert.equal(g.state().swords,1);
 g.sandbox.show('empire');
 assert.match(g.element('content').innerHTML,/Imperiet/);
 g.sandbox.hide();g.advance(3);
});
test('dungeon can be entered and exited',()=>{
 const g=boot({x:915,y:425,scene:'village'});
 g.sandbox.interact();
 assert.equal(g.state().scene,'dungeon');
 g.state().dungeonX=100;g.state().dungeonY=395;
 g.sandbox.interact();
 assert.equal(g.state().scene,'village');
});
test('Safari scroll guard is present',()=>{
 assert.match(html,/overscroll-behavior:none/);
 assert.match(script,/passive:false/);
 assert.match(script,/preventDefault/);
});
