import './App.css';
import React, { Component } from 'react';

class AppUseClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: test,
    };
  }

  handleCHange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className='App App-header'>
        <h2>Markdown Previewer(Class)</h2>
        <div className='App-contents'>
          <div>
            <textarea
              name=''
              id='editor'
              value={this.state.text}
              onChange={this.handleCHange}
            ></textarea>
          </div>
          <div>
            <textarea
              name=''
              id='preview'
              value={this.state.text}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default AppUseClass;

const test = `Editor Class`;
const placeholder = `
  # Header 1
  ## Header 2
  [link](https://example.com)
  \`inline code\`

  \`\`\`  
  codeblock
  \`\`\`  

  * un-ordered list
  * fruits
    * apple   
    * banana
    * strawberry
  
  1. ordered list
  1. hello
  1. world
  1. !!

  > blockquote

  // ![Alt text](https://example.com/img.jpg)

  *italic* (i.e. <em> tag in html)
  **bold** (same as <strong> tag)
  `;
