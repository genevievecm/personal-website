var React = require('react');
import fontawesome from '@fortawesome/fontawesome'
import { faCodepen, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'

import Name from '../Name/Name';
import Title from '../Title/Title';
import Icon from '../Icon/Icon';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Name text="Genevieve Moreau" />
                <Title text="Developer" />
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
                        url="https://www.instagram.com/ge_ne_vi_eve/"
                    />
                </div>
            </div>
        )
    }
}

module.exports = App;
