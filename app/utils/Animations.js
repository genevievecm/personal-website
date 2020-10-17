import { keyframes } from 'styled-components';

export const Wiggle = keyframes`
    20%  {
        -webkit-transform: translate(2px 2px);
        transform: translateX(2px, 2);
    }
    40%  {
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);
    }
    60%  {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    80%  {
        -webkit-transform: translateX(-1px);
        transform: translateX(-1px);
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`;
