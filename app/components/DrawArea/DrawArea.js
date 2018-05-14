import React from 'react';
import Immutable from 'immutable';

// styles
import './DrawArea.css';

// https://pspdfkit.com/blog/2017/how-to-build-free-hand-drawing-using-react/
// https://facebook.github.io/immutable-js/docs/#/

class DrawArea extends React.Component {
  constructor() {
    super();
    this.state = {
      isDrawing: false,
      profileIndex: 0,
      dom: {
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.devicePixelRatio,
      },
      points: [{
        x: 0,
        y: 0,
      }],
    };
  }

  drawSparkle = (ctx, options) => {
    ctx.save();
    ctx.translate(options.x, options.y);

    //Begin our drawing
    ctx.beginPath();
    ctx.scale(options.scale, options.scale);
    ctx.rotate(Math.PI / 180 * options.angle);
    ctx.globalAlpha = options.opacity;
    ctx.quadraticCurveTo(10, 10, 20, 10);
    ctx.quadraticCurveTo(10, 10, 10, 20);
    ctx.quadraticCurveTo(10, 10, 0, 10);
    ctx.quadraticCurveTo(10, 10, 10, 0);
    ctx.quadraticCurveTo(10, 10, 20, 10);

    //Define the style of the shape
    ctx.fillStyle = options.colour;
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  componentDidMount() {
    const { canvas } = this.refs;
    const { dom } = this.state;
    canvas.style.width = `${dom.width}px`;
    canvas.style.height = `${dom.height}px`;
    canvas.getContext('2d').scale(dom.scale, dom.scale);
    this.setState({
      canvas: canvas.getContext('2d'),
    });
  }

  getNextProfileIndex = () => {
    const { profileIndex } = this.state;
    const { max } = this.props;
    return (profileIndex >= max) ? 0 : profileIndex + 1;
  }

  handleMouseUp = (e) => {
    this.setState({
      isDrawing: false,
    });
  }

  handleMouseDown = (e) => {
    this.setState({
      isDrawing: true,
      profileIndex: this.getNextProfileIndex(),
      points: [{
        x: e.clientX,
        y: e.clientY,
        colour: "#EBA846",
      }],
    });
    // send profile index to parent component
    this.props.profile(this.state.profileIndex);
  }

  handleMouseMove = (ctx) => (e) => {
    const colours = ["#F7B94C", "#EBA846", "#DD9441", "#ECAD4B"];
    const { points, isDrawing } = this.state;
    const radius = 5;
    if(isDrawing){
      this.setState({
        points: [ ...points, {
          x: e.clientX,
          y: e.clientY,
          scale: this.getRandomInt(1, 20) / 10,
          angle: this.getRandomInt(0, 180),
          opacity: Math.random(),
          colour: colours[this.getRandomInt(0, colours.length - 1)]
        }],
      });
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let i = 0; i < points.length; i++) {
        this.drawSparkle(ctx, points[i]);
      }
    }
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render(){

    const { dom, canvas } = this.state;

    return (
      <canvas
        id="canvas"
        ref="canvas"
        width={dom.width * dom.scale}
        height={dom.height * dom.scale}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove(canvas)}
        onMouseUp={this.handleMouseUp}
      ></canvas>
    );
  }
}

export default DrawArea;
