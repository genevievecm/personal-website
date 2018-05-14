import React from 'react';
import './Name.css';

class Name extends React.Component {

    constructor(){
        super();
    }

    stringToArray = (string) => {
        return string.split('');
    }

    getLetterWidths = (letters) => {
        return letters.map(letter => {
            letter.parentElement.style.width = `${letter.offsetWidth}px`;
        });
    }

    componentDidMount(){
        const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
        const storage = window.sessionStorage;

        new Promise((resolve, reject) => {
            // get widths of letters after font loads
            setTimeout(() => {
                this.getLetterWidths(spans);
                resolve();
            }, 250);
        })
        .then(() => {
            let time = 250;
            return spans.map((span) => {
                // if session hasn't started
                if(!storage.getItem('sessionStarted')){
                    // then slide letters into view one at a time
                    time += 75;
                    setTimeout(() => {
                        span.parentElement.style.top = '0px';
                    }, time);
                }else{
                    // otherwise assign top position, no slide in anim
                    span.parentElement.style.top = '0px';
                }
            });
        })
        .then(() => {
            // save data to session storage
            storage.setItem('sessionStarted', true);
        });

        // reassign letters widths on window resize
        window.addEventListener("resize", () => {
            return this.getLetterWidths(spans);
        });
    }

    render() {
        return (
            <div id="text" className="noselect">
                {this.stringToArray(this.props.text).map((letter, index) => {
                    // check for spaces
                    if(letter === ' '){
                        return (
                            <div key={`char${index}`} className="space">
                                <span></span>
                            </div>
                        );
                    } else {
                        return (
                            <div key={`char${index}`} className="wrapper">
                                <span className="letter-1">{letter}</span>
                                <span className="letter-2">{letter}</span>
                            </div>
                        );
                    }
                })}
            </div>
        )
    }
}

module.exports = Name;
