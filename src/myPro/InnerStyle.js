import React from 'react'
import ReactDOM from 'react-dom'

const heading = {
    color: 'green',
    textAlign: 'center',
    textShadow: '2px 2px 2px yellow',
    textDecoration: 'underline'
}

ReactDOM.render(
    <h1 style={heading}>Hello World</h1>,
    document.getElementById('root')
)