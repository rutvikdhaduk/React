import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'R.D';

ReactDOM.render(
    <>
        <h1>My Name is {fname}</h1>
        <p>This sum is {5 + 6}</p>
        <p>This is a Randome Number = {Math.random()}</p>
    </>,

    document.getElementById('root')
);