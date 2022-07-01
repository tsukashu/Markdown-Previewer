// import DOMPurify from 'dompurify';
// import { marked } from 'marked';
import { useState } from 'react';
// import './App.css';
import placeholder from './placeholder';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import Button from '@mui/material/Button';

const App = () => {
  const [text, setText] = useState(placeholder);

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
            <textarea
              id='editor'
              value={text}
              onChange={(event) => setText(event.target.value)}
              maxLength={10000}
            ></textarea>
            <div>
              <Button
                variant='contained'
                size='small'
                onClick={() => setText(placeholder)}
              >
                RESET
              </Button>
              <Button
                variant='contained'
                size='small'
                onClick={() => setText('')}
              >
                CLEAR
              </Button>
            </div>
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
