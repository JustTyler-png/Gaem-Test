const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const img = new Image();
img.src = 'FlashLookin.svg';

const sprite = {
  x: canvas.width / 2,
  y: canvas.height - 130,
  w: 80,
  h: 80,
  a: 0
};

const mouse = { ...sprite };
onmousemove = e => ([mouse.x, mouse.y] = [e.x, e.y]);

img.onload = function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const dx = (mouse.x - sprite.x) / 6;
  const dy = (mouse.y - sprite.y) / 6;
  sprite.x += dx;
  sprite.y += dy + 25;
  sprite.a = Math.atan2(dy, dx);

  ctx.save();
  ctx.translate(sprite.x, sprite.y);
  ctx.rotate(sprite.a);
  ctx.drawImage(img, -sprite.w / 2, -sprite.h / 2, sprite.w, sprite.h);
  ctx.restore();
  
  requestAnimationFrame(animate);
};