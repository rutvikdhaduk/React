import React from 'react';
import ReactDOM from 'react-dom';

const fname = 'Raj';
const lname = 'Kumar';

ReactDOM.render(
    <>
        <h1>My Name is {`${fname} ${lname}`}</h1>
        <p>This is a Templet Litrals</p>
    </>,
    document.getElementById('root')
)
