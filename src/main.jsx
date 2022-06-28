import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppUseClass from './AppUseClass';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppUseClass />
  </React.StrictMode>
);
