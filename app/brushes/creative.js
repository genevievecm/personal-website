// let counter = 0;
import { getRandomInt } from '../utils/getRandomInt';
let counter = 0;

export const creative = (ctx, coords, { colour }) => {
  counter++;
  // if(counter % 2 === 0){
    ctx.fillStyle = colour; // colour
    ctx.beginPath();

    ctx.moveTo(coords.x, coords.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.lineTo(coords.x + getRandomInt(10, 50), coords.y + getRandomInt(0, 50));
    ctx.lineTo(coords.x + getRandomInt(0, 50), coords.y + getRandomInt(0, 50));

    ctx.closePath();
    ctx.fill();
  // }
}
