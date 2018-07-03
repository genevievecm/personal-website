import React, { Component } from 'react';
import './Tooltip.css';

export default class Tooltip extends Component {

    constructor(props){
        super(props);
        const storage = window.sessionStorage;
        this.state = {
            display: !storage.getItem('hideTooltip') ? 'show' : 'hide'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.hide !== this.props.hide) {
            console.log(this.props)
            this.setState({ display: 'fade' });

            //hide tooltip after fade out animation is complete
            return setTimeout(() => {
                this.setState({ display: 'hide' });
            }, 700);
        }
    }

    render() {
        return (
            <div className={`tooltip ${this.state.display}`}>
                {this.props.children}
            </div>
        );
    }
}
