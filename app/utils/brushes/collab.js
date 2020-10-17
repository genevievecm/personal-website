export const collab = (ctx, coords, color ) => {
  stroke(ctx, offsetcoords(coords, -5), color[0]);
  stroke(ctx, coords, color[1]);
  stroke(ctx, offsetcoords(coords, 5), color[2]);
}

const stroke = (ctx, coords, color) => {
  let p1 = coords[0];
  let p2 = coords[1];

  // ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.lineJoin;
  ctx.lineCap = 'round';
  ctx.beginPath();

  for (let i = 1; i < coords.length; i++) {
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    p1 = coords[i];
    p2 = coords[i+1];
  }

  ctx.lineTo(p1.x, p1.y);
  ctx.stroke();
}

const offsetcoords = (coords, val) => {
  let offsetcoords = [];
  for (let i = 0; i < coords.length; i++) {
    offsetcoords.push({
      x: coords[i].x + val,
      y: coords[i].y + val
    });
  }
  return offsetcoords;
}
