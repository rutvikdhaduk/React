import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Studant extends Component {
    state = {
        name: "Rahul",
        roll: 20
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <p>Roll no is {this.state.roll}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Studant />,
    document.getElementById('root')
)