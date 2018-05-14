import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Icon.css';

const Icon = (props) => {
    return (
        <a href={props.url} target="_blank" className="icon">
            <FontAwesomeIcon icon={props.logo} size="2x" />
        </a>
    );
}

module.exports = Icon;
