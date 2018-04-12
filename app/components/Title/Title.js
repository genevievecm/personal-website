var React = require('react');
import './Title.css';

class Title extends React.Component {

    constructor(props){
      super();
    }

    render() {
        return (
            <div className="title noselect">{this.props.text}</div>
        )
    }
}

module.exports = Title;
