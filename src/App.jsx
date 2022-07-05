import { useState } from 'react';
import './App.css';
import placeholder from './placeholder';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import { Button, TextField } from '@mui/material/';

const App = () => {
  const [text, setText] = useState(placeholder);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-title'>
          <h2>Markdown Previewer</h2>
        </div>
        <div className='buttons'>
          <Button
            variant='contained'
            size='small'
            onClick={() => setText(placeholder)}
          >
            RESET
          </Button>
          <Button variant='contained' size='small' onClick={() => setText('')}>
            CLEAR
          </Button>
        </div>
        <div className='App-contents'>
          <div className='resizable markdown'>
            <TextField
              multiline
              fullWidth
              sx={{ backgroundColor: 'whitesmoke' }}
              id='editor'
              value={text}
              onChange={(event) => setText(event.target.value)}
              maxLength={10000}
            ></TextField>
          </div>
          <div className='resizable markdown' id='preview'>
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
