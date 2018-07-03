export const teamPlayer = (ctx, points, { colour }) => {
  stroke(ctx, offsetPoints(points, -10), colour[0]);
  stroke(ctx, offsetPoints(points, -5), colour[1]);
  stroke(ctx, points, colour[2]);
  stroke(ctx, offsetPoints(points, 5), colour[3]);
  stroke(ctx, offsetPoints(points, 10), colour[4]);
}

const stroke = (ctx, points, colour) => {
  let p1 = points[0];
  let p2 = points[1];

  // ctx.lineWidth = 2;
  ctx.strokeStyle = colour;
  ctx.lineJoin;
  ctx.lineCap = 'round';
  ctx.beginPath();

  for (let i = 1; i < points.length; i++) {
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    p1 = points[i];
    p2 = points[i+1];
  }

  ctx.lineTo(p1.x, p1.y);
  ctx.stroke();
}

const offsetPoints = (points, val) => {
  let offsetPoints = [];
  for (let i = 0; i < points.length; i++) {
    offsetPoints.push({
      x: points[i].x + val,
      y: points[i].y + val
    });
  }
  return offsetPoints;
}
