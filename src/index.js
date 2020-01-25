import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeSite';
import Cadastre from './Pages/Cadastre';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProveIdentity from './Pages/Cadastre/componentes/ProveIdentity';
import SelectService from './Pages/Cadastre/componentes/SelectService';

ReactDOM.render(
    <>
     <BrowserRouter>
       <Switch>
         <Route path="/" exact={true} component={Home}></Route>
         <Route path="/Cadastre" exact component={Cadastre}></Route>
         <Route path="/ProveIdentity" exact component={ProveIdentity}></Route>
         <Route path="/SelectService" exact component={SelectService}></Route>
       </Switch>
       <GlobalStyle></GlobalStyle>
     </BrowserRouter>
    </>
    , document.getElementById('root')
);

