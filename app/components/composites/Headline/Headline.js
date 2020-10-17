import React from 'react';
import styled from 'styled-components';

import { Letter } from '../../Letter/Letter';

const Name = styled.div`
    position: relative;
    text-align: center;
    width: 100vw;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE/Edge */
    user-select: none;

    &:hover {
        cursor: default;
    }
`;

const Space = styled.span`
    display: block;
    height: 15px;
`;

const Headline = () => {
    return (
        <Name aria-label="Genevieve Moreau">
            <Letter id="l1" width="73" height="70">G</Letter>
            <Letter id="l2" width="46" height="68">E</Letter>
            <Letter id="l3" width="60" height="68">N</Letter>
            <Letter id="l4" width="46" height="68">E</Letter>
            <Letter id="l5" width="69" height="68">V</Letter>
            <Letter id="l6" width="22" height="68">I</Letter>
            <Letter id="l7" width="46" height="68">E</Letter>
            <Letter id="l8" width="69" height="68">V</Letter>
            <Letter id="l9" width="46" height="68">E</Letter>
            <Space aria-hidden />
            <Letter id="l10" width="72" height="68">M</Letter>
            <Letter id="l11" width="73" height="70">O</Letter>
            <Letter id="l12" width="61" height="68">R</Letter>
            <Letter id="l13" width="46" height="68">E</Letter>
            <Letter id="l14" width="72" height="68">A</Letter>
            <Letter id="l15" width="58" height="69">U</Letter>
        </Name>
    )
};

export default Headline;
