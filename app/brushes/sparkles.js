export const sparkles = (ctx, coords, { scale, angle, opacity, colour}) => {
  ctx.save();
  ctx.translate(coords.x, coords.y);

  //Begin our drawing
  ctx.beginPath();

  //Define the styles of the sparkle shape
  ctx.scale(scale, scale); // size
  ctx.rotate(Math.PI / 180 * angle); // rotation
  ctx.globalAlpha = opacity; // opacity
  ctx.fillStyle = colour; // colour

  // sparkle shape
  ctx.quadraticCurveTo(10, 10, 20, 10);
  ctx.quadraticCurveTo(10, 10, 10, 20);
  ctx.quadraticCurveTo(10, 10, 0, 10);
  ctx.quadraticCurveTo(10, 10, 10, 0);
  ctx.quadraticCurveTo(10, 10, 20, 10);

  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
