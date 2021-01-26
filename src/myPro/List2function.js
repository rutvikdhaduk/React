import React from 'react'

function Litem() {
    const arr = [1, 2, 3, 4, 5];
    const number = arr.map((nm, i) => <li key={i}>{nm}</li>)
    return (
        <div>
            <ul>{number}</ul>
        </div>
    )
}

export default Litem;