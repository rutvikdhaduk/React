import React from 'react'
import ReactDOM from 'react-dom'

class Life extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Ram",
            age: "20"
        }
    }
    componentDidMount() {
        console.warn("Did mount Called 2")
    }
    componentDidUpdate() {
        console.warn("did Update")
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Name = {this.state.name}</h2>
                <p>age = {this.state.age}</p>
                <button onClick={() => this.setState({ name: "Rutvik Dhaduk" })}>Update Name</button>
            </div>
        )
    }
}

// export default Life;
// import ReactDOM from 'react-dom'
// import Life from './myPro/statLifeCycle'


ReactDOM.render(
    <Life />,
    document.getElementById('root')
)