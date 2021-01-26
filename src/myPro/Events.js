import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Event extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            version: 0.1
        }
    }

    componentDidMount() {
        console.log("Did Mount Called");
    }

    componentDidUpdate() {
        // console.log("Name is Updated");
        alert("Updated")
    }

    render() {
        return (
            <div>
                <h1>This is First Program</h1>
                <h2 className="nm">Name={this.state.name}</h2>
                <button onClick={() => this.setState({ name: "Dell" })}>Name Update</button>
                <p className="ve">Version={this.state.version}</p>
                <button onClick={() => this.setState({ version: 0.7 })}>Version Update</button>
            </div>
        )
    }
}

ReactDOM.render(
    <>
        <Event />
    </>,
    document.getElementById('root')
)