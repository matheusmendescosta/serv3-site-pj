import React from 'react';

import { 
    Container, ContentLabel, ContentInput, Content
} from './styles';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container>
        <Content>    
            <ContentLabel>Login</ContentLabel>
            <ContentInput type="text"/>
            <br />
            <ContentLabel>Senha</ContentLabel>
            <ContentInput type="password"/>
            <button><Link to="/DashProfission"> vai</Link></button>
        </Content>
    </Container>    
  );
}
