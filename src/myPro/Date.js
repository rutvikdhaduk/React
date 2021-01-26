import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
    <>
        <p>Date = {date}</p>
        <p>Time = {time}</p>
    </>,
    document.getElementById('root')
)