import userEvent from '@testing-library/user-event'
import React from 'react'
import ReactDOM from 'react-dom'

function fullname() {
    return user.fname + ' ' + usr.lname
}

const user = {
    fname="Rahul",
    lname="Kumar"
}

const element = (
    <h1>Hello {fullname(user)}</h1>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)