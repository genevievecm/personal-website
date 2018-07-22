import React from 'react';
import PropTypes from 'prop-types';

// util functions
import { getRandomInt } from '../../utils/getRandomInt';

// brushes
import { sparkles } from '../../brushes/sparkles';
import { pawprints } from '../../brushes/pawprints';
import { creative } from '../../brushes/creative';
import { collab } from '../../brushes/collab';

// styles
import './DrawArea.css';

export default class DrawArea extends React.Component {

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
    const ctx = canvas.getContext('2d');
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;
    this.scaleCanvas(ctx);
    this.setState({
      canvas: ctx,
    });
  }

  scaleCanvas = (ctx) => {
    const { viewport } = this.state;
    ctx.scale(viewport.scale, viewport.scale);
  }

  draw = (brush, ctx, points) => {
    let coords = points[points.length - 1]
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
          opacity: getRandomInt(0.5, 1),
          colour: this.props.colours[getRandomInt(0, this.props.colours.length - 1)]
        });
      break;
      case 'creative':
        creative(ctx, coords, {
          colour: this.props.colours[getRandomInt(0, this.props.colours.length - 1)]
        });
      break;
      case 'collab':
        teamPlayer(ctx, points, {
          colour: this.props.colours
        });
      break
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
      this.props.hideTooltip(true);
      this.setState({
        points: [ ...points, {
          x: e.clientX,
          y: e.clientY,
        }],
      });
      this.draw(this.props.brush, ctx, points);
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

DrawArea.propTypes = {
  hideTooltip: PropTypes.func,
  profile: PropTypes.func,
  brush: PropTypes.string,
  colours: PropTypes.array,
  max: PropTypes.number
}
