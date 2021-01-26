import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name="Rutvik"
}

const element = <h1>My Name is = {user.name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
)