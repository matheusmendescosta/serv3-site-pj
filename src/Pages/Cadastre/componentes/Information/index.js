import React from 'react';
import { Container, ContainerCadastre, Title, InputBlock, InputStyle } from './styles';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';

export default function Information() {
  return (
    <Container>
        <Navbar></Navbar>
        <ContainerCadastre>
            <Title>Cadastre-se</Title>
            <form>
                <InputBlock>Nome</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Sobrenome</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Apelido</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Genero</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Aniversario</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Email</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>CPF</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Numero de Celular</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>CEP</InputBlock>
                    <InputStyle></InputStyle>
                <InputBlock>Nome da Rua</InputBlock>
                    <InputStyle></InputStyle>               
            </form>
            <Link to='/'>Voltar</Link> <br />
            <Link to='/ProveIdentity'>Prosseguir</Link>
        </ContainerCadastre>
    </Container>
  );
}
