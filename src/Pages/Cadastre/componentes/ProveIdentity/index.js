import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function ProveIdentity() {
  return (
    <Container>
        Olá <br />
    

    <Link to='/Cadastre'>Voltar</Link> <br />    
    <Link to='/SelectService'>Prosseguir</Link>    
    </Container>
  );
}
