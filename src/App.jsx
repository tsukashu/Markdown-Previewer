import { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState(test);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='App App-header'>
      <h2>Markdown Previewer(Function)</h2>
      <div className='App-contents'>
        <div>
          <textarea
            name=''
            id='editor'
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <textarea name='' id='preview' value={text} readOnly>
            {text}
          </textarea>
        </div>
      </div>
    </div>
  );
};

const test = `Editor Function`;
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

export default App;
