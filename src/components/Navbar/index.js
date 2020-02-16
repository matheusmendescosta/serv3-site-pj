import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { 
  Container,
  ContainerLogo,
  Logo,
  ContainerLink,
  StyleLink,
  IntemLink,
  LinkHover
} from './styles';


export default function Navbar() {
  return (
      <Container>
        <ContainerLogo>
          <Logo src={logo}/>
        </ContainerLogo>
        <ContainerLink>
            <IntemLink>
                <Link to="./">  
                  <StyleLink>
                    <LinkHover>Inicio</LinkHover>
                  </StyleLink>
                </Link>  
                <Link to="./Cadastre"> 
                  <StyleLink>
                  <LinkHover>Cadastrar</LinkHover>
                  </StyleLink>
                </Link>
              <StyleLink><LinkHover>Equipe</LinkHover></StyleLink>
              <StyleLink><LinkHover>Quem Somos</LinkHover></StyleLink>
              <StyleLink><LinkHover>Apresentação</LinkHover></StyleLink>
              <StyleLink><LinkHover>Detalhes</LinkHover></StyleLink>
              <StyleLink><LinkHover>Contato</LinkHover></StyleLink>
              <Link to="./Dashboard">
              <StyleLink>
                  <LinkHover>Login</LinkHover>
                  </StyleLink>
              </Link>
            </IntemLink>
          </ContainerLink>
      </Container>
  );
}
