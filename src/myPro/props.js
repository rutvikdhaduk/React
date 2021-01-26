import { ReactComponent } from '*.svg';
import React from 'react';
import ReactDOM from 'react-dom';

function Studant(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <p>Age is {props.name}</p>
        </div>
    )
}

ReactDOM.render(
    <Studant name="Rutvik" age="20" />,
    document.getElementById('root')
)
