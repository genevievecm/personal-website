var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

/* RESOURCES *
 *************
 * https://pspdfkit.com/blog/2017/how-to-build-free-hand-drawing-using-react/
 * https://facebook.github.io/immutable-js/docs/#/
 * http://perfectionkills.com/exploring-canvas-drawing-techniques/
 *
 */
