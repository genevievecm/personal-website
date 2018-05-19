import React from 'react';

// util functions
import { getRandomInt } from '../../utils/getRandomInt';

// brushes
import { sparkles } from '../../brushes/sparkles';
import { pawprints } from '../../brushes/pawprints';

// styles
import './DrawArea.css';

class DrawArea extends React.Component {

  constructor() {
    super();
    this.state = {
      isDrawing: false,
      profileIndex: 0,
      points: [{ x: 0, y: 0 }],
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.devicePixelRatio,
      }
    };
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const { viewport } = this.state;
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;
    canvas.getContext('2d').scale(viewport.scale, viewport.scale);
    this.setState({
      canvas: canvas.getContext('2d'),
    });
  }

  draw = (brush, ctx, coords) => {
    switch(brush){
      case 'sparkles':
        sparkles(ctx, coords, {
          scale: getRandomInt(1, 25) / 10,
          angle: getRandomInt(0, 180),
          opacity: Math.random(),
          colour: this.props.colours[getRandomInt(0, this.props.colours.length - 1)]
        });
      break;
      case 'pawprints':
        pawprints(ctx, coords, {
          scale: 0.5,
          angle: getRandomInt(0, 180),
          colour: this.props.colours[0]
        });
      break;
      default:
        return;
    }
  }

  getNextProfileIndex = () => {
    const { profileIndex } = this.state;
    const { max } = this.props;
    return (profileIndex >= max) ? 0 : profileIndex + 1;
  }

  handleMouseDown = (ctx) => (e) => {
    const { colours } = this.props;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.setState({
      isDrawing: true,
      profileIndex: this.getNextProfileIndex(),
      points: [{
        x: e.clientX,
        y: e.clientY,
      }],
    });
    // send profile index to parent component
    this.props.profile(this.state.profileIndex);
  }

  handleMouseMove = (ctx) => (e) => {
    const { points, isDrawing } = this.state;
    if(isDrawing){
      this.setState({
        points: [ ...points, {
          x: e.clientX,
          y: e.clientY,
        }],
      });
      this.draw(this.props.brush, ctx, points[points.length - 1]);
    }
  }

  handleMouseUp = (e) => {
    this.setState({
      isDrawing: false,
    });
  }

  render(){
    const { viewport, canvas } = this.state;
    return (
      <canvas
        id="canvas"
        ref="canvas"
        width={viewport.width * viewport.scale}
        height={viewport.height * viewport.scale}
        onMouseDown={this.handleMouseDown(canvas)}
        onMouseMove={this.handleMouseMove(canvas)}
        onMouseUp={this.handleMouseUp}
      ></canvas>
    );
  }
}

export default DrawArea;
