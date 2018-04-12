var React = require('react');
import './Name.css';

class Name extends React.Component {

    componentDidMount(){
        const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
        const storage = window.sessionStorage;
        const widths = {};

        window.addEventListener("resize", () => {
            spans.map(span => {
                setTimeout(() => {
                    span.parentElement.style.width = `${span.offsetWidth}px`;
                }, 500);
            });
        });

        // use a promise to assign new height and width to letters
        const getLetterWidth = new Promise((resolve, reject) => {
            spans.map(span => {
                const letter = span.parentElement.getAttribute('data-letter');
                //if session hasn't started
                if(!storage.getItem('sessionStarted')){
                    setTimeout(() => {
                        span.parentElement.style.width = `${span.offsetWidth}px`;
                        //add letter widths to widths object
                        widths[letter] = span.offsetWidth;
                        //add widths object to session storage object
                        storage.setItem('letterWidths', JSON.stringify(widths));
                    }, 250);
                } else {
                    //get session storage object
                    const storedWidth = JSON.parse(sessionStorage.getItem('letterWidths'));
                    span.parentElement.style.width = `${storedWidth[letter]}px`;
                }
            });
            resolve();
        });

        getLetterWidth.then(() => {
            let time = 250;
            return spans.map((span) => {
                //if session hasn't started
                if(!storage.getItem('sessionStarted')){
                    // then slide letters into view one at a time
                    time += 75;
                    setTimeout(() => {
                        span.parentElement.style.top = '0px';
                    }, time);
                }else{
                    // no need to slide letters, just assign top position
                    span.parentElement.style.top = '0px';
                }
            });
        }).then(() =>{
            storage.setItem('sessionStarted', true);
        });
    }

    render() {
        // this function turns a string into an array
        function createLetterArray(string){
            return string.split('');
        }

        return (
            <div id="text" className="noselect">
                {createLetterArray(this.props.text).map((letter, index) => {
                    // check for spaces
                    if(letter === ' '){
                        return <div key={`char${index}`} className="space"><span></span></div>;
                    } else {
                        return (
                            <div key={`char${index}`} className="wrapper" data-letter={letter}>
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
