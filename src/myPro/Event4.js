import React, { Component } from 'react'

class EasyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'India' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.value}</p>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="india">India</option>
                        <option value="USA">USA</option>
                        <option value="London">Landon</option>
                        <option value="Chine">Chine</option>
                    </select>
                </label>
            </form>
        );
    }
}


export default EasyForm;