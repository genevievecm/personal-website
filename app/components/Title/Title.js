import React from 'react';
import './Title.css';

class Title extends React.Component {

    constructor(props){
      super();
    }

    render() {
        return (
            <div className="title noselect">{this.props.title}</div>
        )
    }
}

module.exports = Title;
