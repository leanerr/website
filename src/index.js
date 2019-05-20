import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter,HashRouter, Route, Link } from 'react-router-dom'


ReactDOM.render( <BrowserRouter>

    <App />
</BrowserRouter>,  document.getElementById('root'));

