export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }
  draw(ctx) {
    const xGap = 80;
    const yGap = 60;

    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#ff384e";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x, this.maxY);
    ctx.fillStyle = "#190f3a";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY) + yGap;
    ctx.fillStyle = "#9d0919";
    ctx.fill();
    ctx.closePath();
  }
}
