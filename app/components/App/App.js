import React from 'react';
import {
    faCodepen,
    faGithub,
    faLinkedin,
    faTwitter
} from '@fortawesome/fontawesome-free-brands';

// components
import Tooltip from '../Tooltip/Tooltip';
import Name from '../Name/Name';
import Title from '../Title/Title';
import Icon from '../Icon/Icon';
import DrawArea from '../DrawArea/DrawArea';

// profile data
import {
    profiles
} from '../profiles.json';

// styles
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: profiles[0].title,
            brush: profiles[0].brush,
            colours: profiles[0].colours,
            longestAnimationTime: 0,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        // set local storage
        if (prevState.longestAnimationTime !== this.state.longestAnimationTime) {
            const storage = window.sessionStorage;
            storage.setItem('sessionStarted', true);
        }
    }

    handleProfileChange = (index) => {
        this.setState({
            title: profiles[index].title,
            brush: profiles[index].brush,
            colours: profiles[index].colours
        });
    }

    handleDrawing = (bool) => {
        this.setState({
            isDrawing: bool
        });
    };

    handleLongestAnimationTime = (ms) => {
        this.setState({
            longestAnimationTime: ms
        });
    };

    render() {
        return ( <
            div className = "profile" >
            <
            Tooltip delay = {
                this.state.longestAnimationTime
            }
            isDrawing = {
                this.state.isDrawing
            } >
            click and drag your mouse✨ <
            /Tooltip> <
            Name text = "Genevieve Moreau"
            animation = {
                this.handleLongestAnimationTime
            }
            /> <
            Title title = {
                this.state.title
            }
            /> <
            div className = "icon-group" >
            <
            Icon logo = {
                faCodepen
            }
            url = "https://codepen.io/genevievecm/" /
            >
            <
            Icon logo = {
                faGithub
            }
            url = "https://github.com/genevievecm" /
            >
            <
            Icon logo = {
                faLinkedin
            }
            url = "https://www.linkedin.com/in/genevievecm/" /
            >
            <
            Icon logo = {
                faTwitter
            }
            url = "https://twitter.com/gen_evieve" /
            >
            <
            /div> <
            DrawArea isDrawing = {
                this.handleDrawing
            }
            totalProfiles = {
                profiles.length - 1
            }
            profile = {
                this.handleProfileChange
            }
            brush = {
                this.state.brush
            }
            colours = {
                this.state.colours
            }
            /> < /
            div >
        )
    }
}
