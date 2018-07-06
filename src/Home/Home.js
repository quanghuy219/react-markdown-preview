import React, { Component } from 'react';
import Input from './Input/Input';
import './Home.css';
import Preview from './Preview/Preview';


class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            markdown: "# Welcome to my React Markdown Previewer!"
    
        }
        this.handler = this.handler.bind(this);
    }
   
    handler(value) {
        this.setState({
            markdown: value
        })
    }

    render() {
        return (
            <div id="container">
                <Input markdown={this.state.markdown} handler={this.handler}/>
                <Preview markdown={this.state.markdown}/>
            </div>
        )
    }
}

export default Home;