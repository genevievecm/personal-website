// let counter = 0;
import { getRandomInt } from '../utils/getRandomInt';
let counter = 0;

export const creative = (ctx, coords, { angle, colour }) => {
  counter++;
  ctx.fillStyle = colour; // colour
  ctx.beginPath();

  if(counter % 4 === 0){
    const y = coords.y - getRandomInt(0, 25);
    ctx.moveTo(coords.x, y);
    ctx.lineTo(coords.x + getRandomInt(10, 25), coords.y + getRandomInt(0, 25));
    // ctx.lineTo(coords.x, coords.y - getRandomInt(0, 25));
    ctx.lineTo(coords.x - getRandomInt(0, 25), coords.y + getRandomInt(0, 25));
    ctx.rotate(Math.PI * angle); // rotation
  }
  ctx.closePath();
  ctx.fill();
}
