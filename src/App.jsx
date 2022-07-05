import { useState } from 'react';
import './App.css';
import placeholder from './placeholder';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const App = () => {
  const [text, setText] = useState(placeholder);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='App'>
      <div className='App-container'>
        <h2>Markdown Previewer</h2>
        <div>
          <button onClick={() => setText(placeholder)}>RESET</button>
        </div>
        <div className='App-contents'>
          <div className='resizable'>
            <textarea
              id='editor'
              value={text}
              onChange={(event) => setText(event.target.value)}
              maxLength={10000}
            ></textarea>
          </div>

          <div className='resizable'>
            <div id='preview'>
              <ReactMarkdown
                children={text}
                remarkPlugins={[remarkGfm, remarkBreaks]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
