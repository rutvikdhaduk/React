import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {
    return (
        <div>
            <h1>State And LifeCycle</h1>
            <p>Time : {props.date.toLocaleTimeString()}</p>
        </div>
    )
}

function tim() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tim, 1000);