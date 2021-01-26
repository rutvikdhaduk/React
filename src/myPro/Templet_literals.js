import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Rutvik';
const message = 'Welcome';
const element = <h1>Hello {name} {message}</h1>;

console.log(`hello ${name} plese ${message}`);
ReactDOM.render(
    element,
    document.getElementById("root")
);