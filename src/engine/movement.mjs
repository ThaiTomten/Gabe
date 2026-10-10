// Pure movement and collision rules; safe for browser and automated tests.
export function blocked(x,y,buildings=[],bounds={minX:20,minY:20,maxX:980,maxY:850}){
 if(!Number.isFinite(x)||!Number.isFinite(y))return true;
 if(x<bounds.minX||y<bounds.minY||x>bounds.maxX||y>bounds.maxY)return true;
 return buildings.some(b=>x>b.x-14&&x<b.x+b.w+14&&y>b.y-14&&y<b.y+b.h+14);
}
export function safeSpawn(x,y,buildings=[],fallback={x:500,y:550}){
 return blocked(x,y,buildings)?{...fallback}:{x,y};
}
export function movePlayer(position,input,dt,speed,buildings=[]){
 let {x,y}=safeSpawn(position.x,position.y,buildings);
 const dx=Number.isFinite(input.x)?input.x:0,dy=Number.isFinite(input.y)?input.y:0;
 const magnitude=Math.hypot(dx,dy),factor=magnitude>1?1/magnitude:1;
 const step=Math.max(0,Math.min(dt,.05))*speed;
 const nx=x+dx*factor*step,ny=y+dy*factor*step;
 if(!blocked(nx,y,buildings))x=nx;
 if(!blocked(x,ny,buildings))y=ny;
 return {x,y};
}
