import React, {Component, ReactDOM} from 'react';
import './Preview.css';
import marked from 'marked';

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
    renderer: new marked.Renderer(),
    headerIds: false,
  });
  
class Preview extends Component {
    constructor(props) {
        super(props);
        this.loadHtml = this.loadHtml.bind(this);
        this.loadHtml();
    }
    loadHtml() {
        console.log(marked(this.props.markdown))
    }
    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}}>
            </div>
        )
    }
}
export default Preview;
