import React from 'react'
import { St } from './fbutton'

function fEvt() {
    alert("Button Clicked");
}

function Funcevt() {
    return (
        <St>
            <div>
                <button onClick={fEvt}>Click</button>
            </div>
        </St>
    )
}

export default Funcevt;