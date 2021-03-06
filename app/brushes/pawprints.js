let counter = 0;

export const pawprints = (ctx, coords, { scale, angle, opacity, colour}) => {
  counter++;
  if(counter % 4 === 0){
    ctx.save();
    ctx.translate(coords.x, coords.y);

    //Begin our drawing
    ctx.beginPath();

    //Define the styles of the sparkle shape
    ctx.scale(scale, scale); // size
    ctx.rotate(Math.PI / 180 * angle); // rotation
    // ctx.globalAlpha = opacity; // opacity
    ctx.fillStyle = colour; // colour

    // pawprint shape
    ctx.ellipse(15, 25, 5, 6, -15 * Math.PI/180, 0, 2 * Math.PI);
    ctx.moveTo(25, 18);
    ctx.ellipse(25, 16, 5, 7, -10 * Math.PI/180, 0, 2 * Math.PI);
    ctx.moveTo(38, 15);
    ctx.ellipse(38, 16, 5, 7, 10 * Math.PI/180, 0, 2 * Math.PI);
    ctx.moveTo(48, 25);
    ctx.ellipse(48, 25, 5, 6, 15 * Math.PI/180, 0, 2 * Math.PI);
    ctx.moveTo(16, 40);
    ctx.quadraticCurveTo(30, 18, 48, 40);
    ctx.quadraticCurveTo(48, 55, 32, 48);
    ctx.quadraticCurveTo(16, 55, 16, 40);

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}
