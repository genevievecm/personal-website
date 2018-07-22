import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = (props) => {
    return (
        <a href={props.url} target="_blank" className="icon">
            <FontAwesomeIcon icon={props.logo} size="2x" />
        </a>
    );
}

Icon.propTypes = {
    url: PropTypes.string,
    logo: PropTypes.object
};

module.exports = Icon;
