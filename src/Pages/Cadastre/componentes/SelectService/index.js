import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function SelectService() {
  return (
    <Container>
        Selecione os Serviços <br />
        
        <Link to="">Salvar</Link> <br />
        <Link to="/ProveIdentity">Voltar</Link> <br />
    </Container>
  );
}
