// import DOMPurify from 'dompurify';
// import { marked } from 'marked';
import { useState } from 'react';
import './App.css';
import placeholder from './placeholder';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

// const test = `Editor Function`;

const App = () => {
  const [text, setText] = useState(placeholder);
  // const [md, setMd] = useState(ConvertMD(text));

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
              maxLength={10000}
            ></textarea>
          </div>
          <div id='preview'>
            <ReactMarkdown
              children={text}
              remarkPlugins={[remarkGfm, remarkBreaks]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
