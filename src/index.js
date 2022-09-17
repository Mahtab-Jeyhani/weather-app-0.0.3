import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchEngine from './SearchEngine';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchEngine />
    <p><a href="https://github.com/Mahtab-Jeyhani/weather-app-0.0.3">open-source</a> project by Mahtab Jeyhani</p>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
