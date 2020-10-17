import React from 'react';
import styled, { keyframes } from "styled-components";
import { Wiggle } from '../../utils/Animations';

export const StyledUnorderedList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const StyledInlineList = styled(StyledUnorderedList)`
    text-align: center;
    margin-top:25px;
    z-index: 1;

    li {
        display: inline-block;
        padding: 0 15px;
    }
`;

export const InlineList = ({ children }) => {
    return (
        <StyledInlineList>
            {children}
        </StyledInlineList>
    );
}
