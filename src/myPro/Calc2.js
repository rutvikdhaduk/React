import React from 'react'
import ReactDOM from 'react-dom'
import { Add, Mult, sub, div } from './myPro/Calc'


ReactDOM.render(
    <>
        <ul>
            <li>Add {Add(2, 40)}</li>
            <li>Mult {Mult(2, 40)}</li>
            <li>sub {sub(40, 2)}</li>
            <li>Div {div(4, 40)}</li>
        </ul>
    </>,
    document.getElementById('root')
)