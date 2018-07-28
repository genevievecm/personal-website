import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

export default class Tooltip extends Component {

    constructor(props){
        super(props);
        this.state = {
            action: 'hide',
            animation: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // if name is done animating
        if (prevProps.delay !== this.props.delay) {
            return setTimeout(() => {
                this.setState({
                    action: 'show',
                    animation: 'slidedown'
                });
            }, this.props.delay + 250)
        }
        // if mouse is drawing
        if (prevProps.isDrawing !== this.props.isDrawing && this.state.action !== 'hide') {
            this.setState({ animation: 'slideup' });

            //hide tooltip after slideup animation is complete
            return setTimeout(() => {
                this.setState({ action: 'hide' });
            }, 700);
        }
    }

    render() {
        return (
            <div className={`tooltip ${this.state.action} ${this.state.animation}`}>
                {this.props.children}
            </div>
        );
    }
}

Tooltip.propTypes = {
    delay: PropTypes.number,
    isDrawing: PropTypes.bool,
}
