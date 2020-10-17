import React, { useState } from 'react';
import styled from 'styled-components';

import { faCodepen, faGithub, faLinkedin, faTwitter, faMedium } from '@fortawesome/fontawesome-free-brands';

// components
// import Tooltip from '../Tooltip/Tooltip';

import Profiles from '../../utils/Profiles';
import Typography from '../../utils/Typography';
import { Wiggle } from '../../utils/Animations';
import { InlineList } from '../Lists/UnorderedLists';
import { IconLink } from '../Link/IconLink';

import DrawArea from '../DrawArea/DrawArea';
import Headline from '../composites/Headline/Headline';

const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Subhead = styled.div`
    font-size: 1.5rem;
    padding-top: 25px;
    text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE/Edge */
    user-select: none;
`;

const AnimatedListItem = styled.li`
    &:hover {
        -webkit-animation: ${Wiggle} 0.5s ease;
        animation: ${Wiggle} 0.5s ease;
    }
`;

const App = () => {

    const [profileIndex, setProfileIndex] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [coordinates, setCoordinates] = useState([{ x: 0, y: 0 }]);

    const profile = Profiles[!profileIndex ? 0 : profileIndex];

    // componentDidUpdate(prevProps, prevState) {
        // set local storage
        // if (prevState.longestAnimationTime !== this.state.longestAnimationTime) {
        //     const storage = window.sessionStorage;
        //     storage.setItem('sessionStarted', true);
        // }
    // }

    // handleLongestAnimationTime = (ms) => {
    //     this.setState({
    //         longestAnimationTime: ms
    //     });
    // };

    function handleMouseDown(e) {
        const totalProfiles = Profiles.length - 1;
        const context = e.target.getContext('2d');

        // resets canvas for every draw
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        // assures that on the very first mousedown the profile doesn't change
        if (typeof profileIndex !== 'number') {
            setProfileIndex(0);
        } else {
            setProfileIndex(profileIndex < totalProfiles ? profileIndex + 1 : 0);
        }

        setIsDrawing(true);
        setCoordinates([{ x: e.clientX, y: e.clientY }]);
    }

    function handleMouseMove(e) {
        if (isDrawing) {
            setCoordinates([...coordinates, { x: e.clientX, y: e.clientY }]);
        }
    }

    return (
        <React.Fragment>
            <Typography />
            <Profile>
                <Headline />
                <Subhead>{ profile.title }</Subhead>
                <InlineList>
                    <AnimatedListItem>
                        <IconLink icon={ faCodepen } url="https://codepen.io/genevievecm/" />
                    </AnimatedListItem>
                    <AnimatedListItem>
                        <IconLink icon={ faGithub } url="https://github.com/genevievecm" />
                    </AnimatedListItem>
                    <AnimatedListItem>
                        <IconLink icon={ faLinkedin } url="https://www.linkedin.com/in/genevievecm/" />
                    </AnimatedListItem>
                    <AnimatedListItem>
                        <IconLink icon= { faTwitter } url="https://twitter.com/gen_evieve" />
                    </AnimatedListItem>
                    <AnimatedListItem>
                        <IconLink icon= { faMedium } url="https://medium.com/@genthinks" />
                    </AnimatedListItem>
                </InlineList>
            </Profile>
            <DrawArea
                width={ window.innerWidth * window.devicePixelRatio }
                height={ window.innerHeight * window.devicePixelRatio }
                brush={ profile.brush }
                colours={ profile.colours }
                coordinates={ coordinates }
                onMouseMove={ handleMouseMove }
                onMouseDown={ handleMouseDown }
                onMouseUp={ () => setIsDrawing(false) }
            />
        </React.Fragment>
    );
}

export default App;

// <Tooltip delay={ this.state.longestAnimationTime } isDrawing = { this.state.isDrawing }>click and drag your mouse✨ </Tooltip>
