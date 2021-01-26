import React from 'react'
import ReactDOM from 'react-dom'
import { Ps } from './Style'

ReactDOM.render(
    <Ps>
        <div className="main">
            <h1 className="hed">Hello World</h1>
            <p>This is a React App</p>
        </div>
    </Ps>,
    document.getElementById('root')
)