import { getRandomInt } from '../helpers/getRandomInt';

export const sparkles = (ctx, coords, color) => {

    const scale = getRandomInt(1, 25) / 10;
    const lastCoords = coords[coords.length - 1];

    ctx.save();
    ctx.translate(lastCoords.x, lastCoords.y);

    //Begin our drawing
    ctx.beginPath();

    //Define the styles of the sparkle shape
    ctx.scale(scale, scale); // size
    ctx.rotate(Math.PI / 180 * getRandomInt(0, 180)); // rotation
    ctx.globalAlpha = Math.random();
    ctx.fillStyle = color;

    // sparkle shape
    ctx.quadraticCurveTo(10, 10, 20, 10);
    ctx.quadraticCurveTo(10, 10, 10, 20);
    ctx.quadraticCurveTo(10, 10, 0, 10);
    ctx.quadraticCurveTo(10, 10, 10, 0);
    ctx.quadraticCurveTo(10, 10, 20, 10);

    ctx.closePath();
    ctx.fill();
    ctx.restore();
};
