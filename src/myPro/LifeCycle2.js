import React, { Component } from 'react'
import { Evs } from "./Event2";

class Clock extends Component {
    constructor() {
        super()
        this.state = { date: new Date() }
    }
    render() {
        return (
            <Evs>
                <h1>This is a Clock</h1>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </Evs>
        )
    }
}


export default Clock;