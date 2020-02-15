import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomeSite';
import Cadastre from './Pages/Cadastre';
//import ServiceCategory from './Pages/ServiceCategory';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          
          <Route path="/Cadastre" exact component={Cadastre} />

          {/* <Route path="/ServiceCategory" exact component={ServiceCategory} />  */}
        </Switch>
        <GlobalStyle></GlobalStyle>
      </BrowserRouter>
    </Provider>
    </>
    ,document.getElementById('root')
);

