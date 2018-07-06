import React, {Component} from "react";
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handler(e.target.value);
    }

    render() {
        return (
            <div id="editor">
                <textarea type="text" rows="4" cols="50" onChange={this.handleChange} value={this.props.markdown}>
                
                </textarea>
            </div>
        )
    }
}

export default Input;