import React from 'react';
import {Link} from 'react-router-dom';
import { 
    Container, 
} from './styles';

export default function Cadastre() {
  return (
    <Container>
        <h1>Cadastro</h1>

        <Link to="./">Home</Link> 
    </Container>
  );
}
