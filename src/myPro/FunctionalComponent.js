import React from 'react';


function Studant(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h3>Age = {props.age}</h3>
            <p>Std = {props.std}</p>
        </div>
    )
}

export default Studant;


// import React, { Component } from 'react'

// class Studant extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Name = {this.props.name}</h1>
//                 <p>age = {this.props.age}</p>
//                 <p>std = {this.props.std}</p>
//             </div>
//         )
//     }
// }
// export default Studant;
// -------------------------------------Index.js------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Studant from './myPro/FunctionalComponent'
// ReactDOM.render(
//     <Studant name="Rajesh" age="20" std="BCA" />,
//     document.getElementById('root')
// );
