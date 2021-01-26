import React, { Component } from 'react';

class Studant extends Component {
    render() {
        return (
            <div>
                <h1>Name {this.props.name}</h1>
                <h3>age {this.props.age}</h3>
            </div>
        )
    }
}

export default Studant;