import React from 'react';

function Listkeys() {
    const arr2 = [1, 2, 3, 4, 5, 6]
    const lsitem = arr2.map((nms, index) => <li key={index}>{nms}</li>,)
    console.log(lsitem);
    return (
        <div>
            <ul>{lsitem}</ul>
        </div>
    )
}
export default Listkeys;