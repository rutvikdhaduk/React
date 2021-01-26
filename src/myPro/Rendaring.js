import React from 'react';
import ReactDOM from 'react-dom';

function FormateName(user) {
    return user.fname + ' ' + user.lname;
}

const user = {
    fname: "Hello",
    lname: "World",
};
console.log(user)
const element = <h1>My Name is:{FormateName(user)}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);