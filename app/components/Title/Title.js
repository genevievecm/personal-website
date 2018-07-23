import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default class Title extends React.Component {

    constructor(props){
      super();
    }

    render() {
        return (
            <div className="title noselect">{this.props.title}</div>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string,
}
