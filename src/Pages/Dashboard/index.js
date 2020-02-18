import React, { useState, useEffect } from 'react';

import { 
    Container 
} from './styles';
import Login from './Login';
import Navbar from '../../components/Navbar';

export default function Dashboard() {

  const [login, setLogin] = useState('Entrar');

  useEffect(()=>{
    document.title=`${login}`;
  })

  return (
    <Container>
        <Navbar />
        <Login />
    </Container>
  );
}
