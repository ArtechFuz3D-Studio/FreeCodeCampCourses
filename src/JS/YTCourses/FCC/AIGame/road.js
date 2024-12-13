import {lerp} from './utils'

export class Road {
  constructor(x, width, laneCount = 5) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width * 0.5;
    this.right = x + width * 0.5;

    const infinity = 100000;
    this.top = -infinity;
    this.bottom = infinity;

    const topLeft={x:this.left,y:this.top}
    const topRight={x:this.right,y:this.top}
    const bottomLeft={x:this.left,y:this.bottom}
    const bottomRight={x:this.right,y:this.bottom}
    this.borders=[
        [topLeft, bottomLeft],
        [topRight,bottomRight]
    ]
  }

  getLaneCenter(laneIndex){
    const laneWidth = this.width/this.laneCount
    return this.left + laneWidth*0.5 +
        Math.min(laneIndex, this.laneCount-1)*laneWidth
  }

  draw(ctx) {
    ctx.linewidth = 5;
    ctx.strokeStyle = "black";

    // for (let i = 0; i <= this.laneCount; i++) {
    for (let i = 1; i <= this.laneCount; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

    //   if(i>0 && i<this.laneCount){
        ctx.setLineDash([20,20])
    //   } else {
        // ctx.setLineDash([])
    //   }
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }

    ctx.setLineDash([])
    this.borders.forEach(border=>{
        ctx.beginPath();
        ctx.moveTo(border[0].x,border[0].y);
        ctx.lineTo(border[1].x,border[1].y);
        ctx.stroke();
    })
  }
}
