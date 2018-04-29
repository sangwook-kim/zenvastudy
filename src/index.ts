import { Player } from './player';

const canvasBg = <HTMLCanvasElement> document.getElementById('canvasBg');
const ctxBg = canvasBg.getContext('2d');
const canvasEntities = <HTMLCanvasElement> document.getElementById('canvasEntities');
const ctxEntities = canvasEntities.getContext('2d');
const { width, height } = canvasBg;
const reqAFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  ((cb) => {
    window.setTimeout(cb, 1000 / 60);
  });
const imgSprite = new Image();

let isPlaying = false;
const player1 = new Player(ctxEntities, imgSprite, 0, height, 35, 54)

function loadResources() {
  imgSprite.src = 'images/sprite.png';
  imgSprite.addEventListener('load', initGame);
}

function initGame() {
  document.addEventListener('keydown', function(e) {checkKey(e, true)}, false);
  document.addEventListener('keyup', function(e) {checkKey(e, false)}, false);
  begin();
}

function begin() {
  ctxBg.drawImage(imgSprite, 0, 0,  width, height, 0, 0, width, height);
  isPlaying = true;
  reqAFrame(loop);
}

function loop() {
  if (isPlaying) {
    update();
    draw();
    reqAFrame(loop);
  }
}

function clearCtx(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, width, height);
}

function update() {
  clearCtx(ctxEntities);
  player1.update();
}

function draw() {
  player1.draw();
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function checkKey(e: KeyboardEvent, flag: boolean) {
  const keyID = e.keyCode || e.which;

  e.preventDefault();

  if (keyID === 38) {
    player1.isUpKey = flag;
  }
  if (keyID === 39) {
    player1.isRightKey = flag;
  }
  if (keyID === 40) {
    player1.isDownKey = flag;
  }
  if (keyID === 37) {
    player1.isLeftKey = flag;
  }
  if (keyID === 32) {
    player1.isSpacebar = flag;
  }
}

function outOfBounds(entity, x, y) {
  const newBottomY = y + entity.height;
  const newTopY = y;
  const newRightX = x + entity.width;
  const newLeftX = x;
  const treeLineTop = 5;
  const treeLineBottom = 570;
  const treeLineRight = 750;
  const treeLineLeft = 65;
}

loadResources();
