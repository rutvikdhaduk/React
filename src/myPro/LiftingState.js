import React, { Component } from 'react'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The Water Would boil.</p>
    }
    return <p>The Water Would not boil.</p>
}

class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = { temparature: '' };
    }

    handalChange = (e) => {
        this.setState({ temparature: e.target.value });
    }

    render() {
        const temparature = this.state.temparature;
        return (
            <div>
                <fieldset>
                    <legend>Enter Tempurater in celcius</legend>
                    <input
                        value={temparature}
                        onChange={this.handalChange}
                    />
                    <BoilingVerdict celsius={parseFloat(temparature)} />
                </fieldset>
            </div>
        );
    }
}

export default Calculater;