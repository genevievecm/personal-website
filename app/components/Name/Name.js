import React from 'react';
import PropTypes from 'prop-types';
import './Name.css';

// util functions
import { stringToArray } from '../../utils/stringToArray';

export default class Name extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            letters: [],
        }
    }

    componentDidMount(){
        const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));

        new Promise((resolve, reject) => {
            // get widths of letters after giving font some time to load
            setTimeout(() => resolve(this.getLetterWidths(spans)), 250);
        }).then((widths) => {
            this.setState({ letters: widths });
            spans.map((span) => this.setLetterWidth(span));
        }).then(() => {
            let time = 250;
            const allTimes = [];
            let opacity = 0;
            return spans.map((span) => {
                allTimes.push(time);
                if(!sessionStorage.getItem('sessionStarted')){
                    // slide letters into view one at a time
                    time += 75;
                    span.parentElement.style.top = '-900px'
                    setTimeout(() => {
                        span.parentElement.style.opacity = 1;
                        span.parentElement.style.top = '0px'
                    }, time);
                    // capture total animation time for name entrance
                    if(spans.length === allTimes.length){
                        this.props.animation(allTimes[spans.length - 1]);
                    }
                } else {
                    // fade in all letters
                    opacity += 0.1;
                    const fadein = setInterval(() => {
                        span.parentElement.style.opacity = opacity;
                        if(opacity === 1){
                            clearInterval(fadein);
                        }
                    }, 150);
                    span.parentElement.style.top = '0px';
                }
            });
        });

        // listen for window resize
        window.addEventListener("resize", () => {
            // set new letter sizes in state
            this.setState({ letters: this.getLetterWidths(spans) });
            // apply letter sizes to letter elements
            spans.map((span) => this.setLetterWidth(span));
        });
    }

    getLetterWidths = (letters) => {
        let letterObj = {};
        let letterData = letters.map(letter => {
            return letterObj = {
                letter: letter.innerHTML.toUpperCase(),
                width: letter.offsetWidth
            };
        }).filter((elem, index, self) => self.findIndex((t) => {
            return (t.width > 0 && t.letter === elem.letter && t.width === elem.width)
        }) === index);
        return letterData;
    }

    setLetterWidth = (elem) => {
        const letter = elem.getAttribute('data-letter').toUpperCase();
        const obj = this.state.letters.filter((o) => o.letter === letter)[0];
        if(obj !== undefined){
            return elem.parentElement.style.width = `${obj.width}px`;
        }
    }

    render() {
        return (
            <div id="text" className="noselect">
                {stringToArray(this.props.text).map((letter, index) => {
                    // check for spaces
                    if(letter === ' '){
                        return (
                            <div key={`char${index}`} className="space">
                                <span data-letter="space"></span>
                            </div>
                        );
                    } else {
                        return (
                            <div key={`char${index}`} className="wrapper">
                                <span className="letter-1" data-letter={letter}>{letter}</span>
                                <span className="letter-2" data-letter={letter}>{letter}</span>
                            </div>
                        );
                    }
                })}
            </div>
        )
    }
}

Name.propTypes = {
    text: PropTypes.string,
    animation: PropTypes.func,
}
