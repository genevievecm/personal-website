import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
    color: #384949;
    transition: ease 0.5s all;
`;

export const IconLink = ({ url, icon }) => {
    return (
        <StyledLink href={url} target="_blank">
            <FontAwesomeIcon icon={icon} size="2x" />
        </StyledLink>
    );
}

IconLink.propTypes = {
    url: PropTypes.string,
    logo: PropTypes.object,
};
