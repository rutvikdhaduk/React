import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class Listitem extends Component {
    render() {
        const number = [1, 2, 3, 4, 5, 6];
        const numbers = number;
        console.log(numbers)
        const Itemlist = numbers.map((nm) => <li>{nm}</li>)
        return (
            <ul>{Itemlist}</ul>
        )
    }
}

export default Listitem;