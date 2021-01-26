import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Component';
import Paragraph from './Coms';
import List from './list';

ReactDOM.render(
    <>
        <Heading />
        <Paragraph />
        <List />
    </>,
    document.getElementById('root')
);