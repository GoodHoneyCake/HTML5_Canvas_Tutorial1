export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = diameter + (Math.ramdom() * stageWidth - diameter);
    this.y = diameter + (Math.ramdom() * stageWidth - diameter);
  }

  draw(ctx, stageWidth, stageHeight) {}
}
