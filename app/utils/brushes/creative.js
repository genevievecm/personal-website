import { getRandomInt } from '../helpers/getRandomInt';

let counter = 0;

export const creative = (ctx, coords, colors) => {

    const lastCoords = coords[coords.length - 1];

    counter++;
    ctx.fillStyle = colors[getRandomInt(0, colors.length - 1)];
    ctx.beginPath();

    if(counter % 4 === 0){
        const y = lastCoords.y - getRandomInt(0, 25);
        ctx.moveTo(lastCoords.x, y);
        ctx.lineTo(lastCoords.x + getRandomInt(10, 25), lastCoords.y + getRandomInt(0, 25));
        ctx.lineTo(lastCoords.x - getRandomInt(0, 25), lastCoords.y + getRandomInt(0, 25));
        // ctx.rotate(Math.PI / 180 * getRandomInt(0, 180)); // rotation; spreads triangles out
    }
    ctx.closePath();
    ctx.fill();
};
