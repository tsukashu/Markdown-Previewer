import { useState } from 'react';
import './App.css';




const Editor = () => {
  return (
    <div>
      <textarea name='' id='editor' defaultValue={text}></textarea>
    </div>
  );
};

const Preview = (props) => {
  return (
    <div>
      <textarea name='' id='preview' readOnly>
        {props.text}
      </textarea>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App App-header'>
      <h2>Markdown Previewer</h2>
      <div className='App-contents'>
        <Editor />
        <Preview />
      </div>
    </div>
  );
}
const text = `
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
