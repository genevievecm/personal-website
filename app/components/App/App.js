import React from 'react';
import { faCodepen, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';

// components
import Tooltip from '../Tooltip/Tooltip';
import Name from '../Name/Name';
import Title from '../Title/Title';
import Icon from '../Icon/Icon';
import DrawArea from '../DrawArea/DrawArea';

// static profile data
import { profiles } from '../profiles.json';

// styles
import './App.css';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: profiles[0].title,
            brush: profiles[0].brush,
            colours: profiles[0].colours,
            isDrawing: false
        }
    }

    handleProfileChange = (index) => {
        this.setState({
            title: profiles[index].title,
            brush: profiles[index].brush,
            colours: profiles[index].colours
        });
    }

    handleTooltip = (bool) => {
        this.setState({
            isDrawing: bool
        });
    }

    render() {
        return (
            <div className="profile">
                <Tooltip hide={this.state.isDrawing}>
                    click and drag your mouse ✨
                </Tooltip>
                <Name text="Genevieve Moreau" isDrawing={this.state.isDrawing} />
                <Title title={this.state.title} />
                <div className="icon-group">
                    <Icon
                        logo={faCodepen}
                        url="https://codepen.io/genevievecm/"
                    />
                    <Icon
                        logo={faGithub}
                        url="https://github.com/genevievecm"
                    />
                    <Icon
                        logo={faLinkedin}
                        url="https://www.linkedin.com/in/genevievecm/"
                    />
                    <Icon
                        logo={faTwitter}
                        url="https://twitter.com/gen_evieve"
                    />
                    <Icon
                        logo={faInstagram}
                        url="https://www.instagram.com/_genevievecm/"
                    />
                </div>
                <DrawArea
                    hideTooltip={this.handleTooltip}
                    max={profiles.length - 1}
                    profile={this.handleProfileChange}
                    brush={this.state.brush}
                    colours={this.state.colours}
                />
            </div>
        )
    }
}
