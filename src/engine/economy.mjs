// Pure simulation rules for Runeforge Empire. No DOM or timers.
export const SAVE_VERSION = 2;
export const RECIPES = Object.freeze({sword:{ore:2,wood:1},armor:{ore:5,wood:3}});
export function finiteCount(v,fallback=0){return Number.isFinite(v)?Math.max(0,Math.floor(v)):fallback}
export function normalizeState(raw={}){
 const s={...raw};
 for(const k of ['gold','ore','wood','swords','runes','potions','totalGold'])s[k]=finiteCount(s[k]);
 for(const k of ['mine','forge','woodLevel'])s[k]=Math.max(1,finiteCount(s[k],1));
 for(const k of ['manager','autoForge','autoSell'])s[k]=s[k]===true;
 return s;
}
export function craftSword(state){
 const s=normalizeState(state);
 if(s.ore<2||s.wood<1)return {state:s,crafted:false};
 s.ore-=2;s.wood-=1;s.swords+=s.forge;
 return {state:s,crafted:true};
}
export function sellSword(state,price=35){
 const s=normalizeState(state);
 if(s.swords<1)return {state:s,sold:false};
 s.swords--;s.gold+=price;s.totalGold+=price;
 return {state:s,sold:true};
}
export function advanceProduction(state,cycles){
 const s=normalizeState(state);
 const n=Math.max(0,Math.min(5760,finiteCount(cycles)));
 // Each cycle is 5 seconds. Process one cycle at a time to preserve resource order.
 for(let i=0;i<n;i++){
  if(s.manager)s.ore+=s.mine;
  if(s.autoForge&&s.ore>=2&&s.wood>=1){s.ore-=2;s.wood--;s.swords+=s.forge}
  if(s.autoSell&&s.swords>0){s.swords--;s.gold+=35;s.totalGold+=35}
 }
 return s;
}
export function offlineCycles(now,lastSaved,capHours=8){
 if(!Number.isFinite(now)||!Number.isFinite(lastSaved))return 0;
 return Math.floor(Math.min(Math.max(0,now-lastSaved),capHours*3600000)/5000);
}
