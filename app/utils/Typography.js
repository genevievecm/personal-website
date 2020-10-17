import { createGlobalStyle } from "styled-components";

import TokyoRegularOTF from '../assets/fonts/TokyoRegular-Regular.otf';
import TokyoRegularTTF from '../assets/fonts/TokyoRegular-Regular.ttf';

import TokyoOutlineOTF from '../assets/fonts/TokyoOutline-Outline.otf';
import TokyoOutlineTTF from '../assets/fonts/TokyoOutline-Outline.ttf';

const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Ubuntu+Mono|Lora|Inconsolata');

    @font-face {
        font-family: 'TokyoRegular';
        font-style: normal;
        font-weight: 400;
        src:
            local('TokyoRegular'),
            url(${TokyoRegularOTF}) format('opentype'),
            url(${TokyoRegularTTF}) format('truetype');
    }

    @font-face {
        font-family: 'TokyoOutline';
        font-style: normal;
        font-weight: 400;
        src:
            local('TokyoOutline'),
            url(${TokyoOutlineOTF}) format('opentype'),
            url(${TokyoOutlineTTF}) format('truetype');
    }

    html, body {
        background-color: white;
        color: #384949;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-size: 16px;

        /* font-family: 'Ubuntu Mono', monospace; */
        font-family: 'Inconsolata';
    }
`;

export default Typography;
