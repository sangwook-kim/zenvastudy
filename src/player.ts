export class Player {
  private ctx: CanvasRenderingContext2D;
  private imgSprite: HTMLImageElement;
  private srcX: number; // 0
  private srcY: number; // 600
  private width: number; // 35
  private height: number; // 34
  private drawX: number;
  private drawY: number;
  private centerX: number;
  private centerY: number;
  private speed: number;

  public isUpKey: boolean;
  public isDownKey: boolean;
  public isRightKey: boolean;
  public isLeftKey: boolean;
  public isSpacebar: boolean;

  constructor(ctx: CanvasRenderingContext2D, imgSprite: HTMLImageElement, x: number, y: number, w: number, h: number) {
    this.ctx = ctx;
    this.imgSprite = imgSprite;
    this.srcX = x;
    this.srcY = y;

    this.width = w;
    this.height = h;

    this.drawX = 400;
    this.drawY = 300;

    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);

    this.speed = 2;

    this.isUpKey = false;
    this.isDownKey = false;
    this.isRightKey = false;
    this.isLeftKey = false;
    this.isSpacebar = false;
  }

  update() {
    if(this.isUpKey) {
      this.drawY -= this.speed;
    }
    if(this.isDownKey) {
      this.drawY += this.speed;
    }
    if(this.isRightKey) {
      this.drawX += this.speed;
    }
    if(this.isLeftKey) {
      this.drawX -= this.speed;
    }
    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);
  }

  draw() {
    this.ctx.drawImage(this.imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this. width, this.height);
  }
}
