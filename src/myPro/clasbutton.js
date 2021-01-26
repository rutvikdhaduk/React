import React, { Component } from 'react'

function mf() {
    alert("Hello");
}

class Evt extends Component {
    render() {
        return (
            <div>
                <button onClick={mf}>Click Me</button>
            </div>
        );
    }
}



export default Evt;