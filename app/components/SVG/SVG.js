import React from 'react';

// colors
const cyan = "#97EFE9";
const purple = "#5B4FCD";

const alreadyAnimated = () => {
    if(sessionStorage.getItem('sessionStarted')) {
        return 'is_static';
    }
};

const SVG = ({ id, letter, width, height }) =>
    <svg
        id={id}
        className={`letter is_hidden ${alreadyAnimated()}`}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g
            stroke="none"
            fill="none"
            fontFamily="Tokyo-Regular, Tokyo"
        >
            <g transform="translate(-4.000000, -44.000000)">
                <text fill={cyan}>
                    <tspan x="6" y="113">{letter}</tspan>
                </text>
                <text fill={purple}>
                    <tspan x="0" y="113">{letter}</tspan>
                </text>
            </g>
        </g>
    </svg>

export default SVG;
