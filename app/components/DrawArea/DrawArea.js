import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
`;

const DrawArea = (props) => {

    const canvasRef = useRef(null);

    // need to get the canvas context after component mounts
    // array means to only execute the function once, after component mounts
    useEffect(() => {
        const canvas = canvasRef.current;
        const currentContext = canvas.getContext('2d');

        // draw
        props.brush(currentContext, props.coordinates);

    });

    return (
        <Canvas ref={canvasRef} {...props} />
    );
};

export default DrawArea;
