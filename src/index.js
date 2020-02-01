import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeSite';
import Cadastre from './Pages/Cadastre';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Information from './Pages/Cadastre/componentes/Information';
import ProveIdentity from './Pages/Cadastre/componentes/ProveIdentity';
import SelectService from './Pages/Cadastre/componentes/SelectService';
import store from './store/index';
import { Provider } from 'react-redux';


ReactDOM.render(
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/Cadastre" exact component={Cadastre}></Route>
          <Route path="/Information" exact component={Information}></Route>
          <Route path="/ProveIdentity" exact component={ProveIdentity}></Route>
          <Route path="/SelectService" exact component={SelectService}></Route> 
        </Switch>
        <GlobalStyle></GlobalStyle>
      </BrowserRouter>
    </Provider>
    </>
    , document.getElementById('root')
);

