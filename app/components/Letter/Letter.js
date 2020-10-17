import React from 'react';
import styled from 'styled-components';

const SVGLetter = styled.svg`
    font-family: "TokyoRegular";
    font-size: 6em;
    height: 7vw;
    padding: 0 2px;
    position: relative;
`;

export const Letter = ({ id, width, height, children }) => {
    return (
        <SVGLetter
            id={id}
            viewBox={`0 0 ${width} ${height}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden
        >
            <g stroke="none" fill="none">
                <g transform="translate(-4.000000, -44.000000)">
                    <text fill="#97EFE9">
                        <tspan x="6" y="113">{children}</tspan>
                    </text>
                    <text fill="#5B4FCD">
                        <tspan x="0" y="113">{children}</tspan>
                    </text>
                </g>
            </g>
        </SVGLetter>
    );
};
