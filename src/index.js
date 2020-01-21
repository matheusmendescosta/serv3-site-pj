import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeSite';
import GlobalStyle from './styles/global';

ReactDOM.render(
    <>
    <Home />
    <GlobalStyle></GlobalStyle>
    </>
    , document.getElementById('root')
);

