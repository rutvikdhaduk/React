import React from 'react';
import ReactDOM from 'react-dom';

function time() {
    const element = (
        <h1>{new Date().toLocaleTimeString()}</h1>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(time, 1000);