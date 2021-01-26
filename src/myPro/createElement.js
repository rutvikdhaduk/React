import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const element = React.createElement(
    'h1', { id: 'name' }, 'Hello This is a Create Element'
);

ReactDOM.render(
    element,
    document.getElementById('root')
);