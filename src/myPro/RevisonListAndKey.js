import React, { Component } from 'react'

class Reve extends Component {
    render() {
        const number = [1, 2, 3, 4, 5];
        const numbers = number.map((num) => <li>{num * 2}</li>)

        const cd = [1, 2, 3, 4, 5]
        const nm = cd.map((g, i) => <li key={i}>{g}</li>)
        return (
            <div>
                <ul>{numbers}</ul>
                <ul>{nm}</ul>
            </div>
        )
    }
}

export default Reve;