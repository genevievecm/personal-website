import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../SvgLetter/SvgLetter';

import './Name.css';

export default class Name extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            letters: [],
        }
    }

    animateLetters = () => {
        let letterCount = 1;
        const letterTotal = document.getElementsByClassName('letter').length;
        const storage = window.sessionStorage;
        const animateLetters = setInterval(() => {
            // apply animation class to each letter
            document.getElementById(`l${letterCount}`).classList.add('is_animated');
            if (letterCount === letterTotal) {
                clearInterval(animateLetters);
                // storage.setItem('sessionStarted', true);
            }
            letterCount++;
        }, 100);
    };

    componentDidMount(){
        // only animate if this is the first time visiting site
        // if (!sessionStorage.getItem('sessionStarted')) {
            this.animateLetters();
        // }
    }

    render() {
        return (
            <div id="name" className="noselect">
                <SVG id="l1" letter="G" width="73" height="70" />
                <SVG id="l2" letter="E" width="46" height="68" />
                <SVG id="l3" letter="N" width="60" height="68" />
                <SVG id="l4" letter="E" width="46" height="68" />
                <SVG id="l5" letter="V" width="69" height="68" />
                <SVG id="l6" letter="I" width="22" height="68" />
                <SVG id="l7" letter="E" width="46" height="68" />
                <SVG id="l8" letter="V" width="69" height="68" />
                <SVG id="l9" letter="E" width="46" height="68" />
                <span className="space"></span>
                <SVG id="l10" letter="M" width="72" height="68" />
                <SVG id="l11" letter="O" width="73" height="70" />
                <SVG id="l12" letter="R" width="61" height="68" />
                <SVG id="l13" letter="E" width="46" height="68" />
                <SVG id="l14" letter="A" width="72" height="68" />
                <SVG id="l15" letter="U" width="58" height="69" />
            </div>
        )
    }
}

Name.propTypes = {
    text: PropTypes.string,
    animation: PropTypes.func,
}
