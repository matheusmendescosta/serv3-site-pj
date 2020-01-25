import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastre from './Pages/Cadastre';
import HomeSite from './Pages/HomeSite';

export default function Routes() {
   return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact={true} component={HomeSite}></Route>
         <Route path="/Cadastre" exact component={Cadastre}></Route>
       </Switch>
     </BrowserRouter>
   );
}