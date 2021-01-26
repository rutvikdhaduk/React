import React, { Component } from 'react'
import { Fm } from './fom'
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' }
    }

    myChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    myClick = (e) => {
        // e.prevantDefault();
        alert(this.state.username);
    }

    render() {
        return (
            <Fm>
                <form>
                    <p>Input = {this.state.username}</p>
                    <label>Name :</label>
                    <input type="text" className="inp" onChange={this.myChangeHandler} />
                    <br />
                    <label>Password :</label>
                    <input type="text" onChange={this.myChangeHandler} />
                    <button className="btn" onClick={this.myClick}>Button</button>
                </form>
            </Fm >
        )
    }
}


export default NameForm;

