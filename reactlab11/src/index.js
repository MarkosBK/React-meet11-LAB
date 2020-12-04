import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './App';
import reportWebVitals from './reportWebVitals';
import Music from './Example2';
import Reciept from './Example3'
ReactDOM.render(
  
  <React.StrictMode>
    <Book/>
    <hr/>
    <Music/>
    <hr/>
    <Reciept/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
