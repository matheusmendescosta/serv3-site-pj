import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastre from './Pages/Cadastre';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/HomeSite';
import DashProfission from './Pages/Dashboard/DashProfission';
// import Dashboard from './Pages/Dashboard/HomeProfission';

ReactDOM.render(
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          
          <Route path="/Cadastre" exact component={Cadastre} />

          <Route path="/Dashboard" exact component={Dashboard} />

          <Route path="/DashProfission" exact component={DashProfission} />

        </Switch>
        <GlobalStyle></GlobalStyle>
      </BrowserRouter>
    </Provider>
    </>
    ,document.getElementById('root')
);

