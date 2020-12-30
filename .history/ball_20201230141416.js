export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = this.radius + (Math.ramdom() * (stageWidth - diameter))
    this.y = this.radius + (Math.ramdom() * (stageHeight - diameter))
  }

  
