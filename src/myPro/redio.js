import React, { Component } from 'react'

class Radio extends Component {
    render() {
        return (
            <form>
                <label>1</label>
                <input type="checkbox" />
                <label>2</label>
                <input type="checkbox" />
                <label>3</label>
                <input type="checkbox" />
            </form>
        )
    }
}
export default Radio;