import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState(placeholder);
  const [md, setMd] = useState(ConvertMD(text));

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setText(placeholder);
  };

  return (
    <div className='App'>
      <div className='App-container'>
        <h2>Markdown Previewer</h2>

        <div className='App-contents'>
          <div>
            <div>
              <button onClick={handleClick}>RESET</button>
            </div>
            <textarea
              id='editor'
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <div>
            <div
              id='preview'
              dangerouslySetInnerHTML={{ __html: ConvertMD(text) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ConvertMD = (raw) => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    // highlight: function(code, lang) {
    //   const hljs = require('highlight.js');
    //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    //   return hljs.highlight(code, { language }).value;
    // },
    // langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    gfm: true,
    breaks: true,
    sanitizer: DOMPurify.sanitize(),
  });
  return marked.parse(raw);
  
};;

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

  ![Alt text](https://example.com/img.jpg)

  *italic* (i.e. <em> tag in html)
  **bold** (same as <strong> tag)
  `;

export default App;
