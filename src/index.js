import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchEngine from './SearchEngine';
import reportWebVitals from './reportWebVitals';
import Current from "./Current";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Current />
    <SearchEngine />
    <p className="footer"><a href="https://github.com/Mahtab-Jeyhani/weather-app-0.0.3">open-source</a> project by Mahtab Jeyhani</p>
  </React.StrictMode>
);

reportWebVitals();
