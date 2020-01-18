import React from 'react';
import logo from '../../Assets/logo.png'
import { 
  Container,
  ContainerLogo,
  Logo,
  ContainerLink,
  Link,
  IntemLink
} from './styles';


export default function Navbar() {
  return (
      <Container>
        <ContainerLogo>
          <Logo src={logo}/>
        </ContainerLogo>
        <ContainerLink>
            <IntemLink>
              <Link>Inicio</Link>
              <Link>Cadastrar</Link>
              <Link>Equipe</Link>
              <Link>Quem Somos</Link>
              <Link>Apresentação</Link>
              <Link>Detalhes</Link>
              <Link>Contato</Link>
            </IntemLink>
          </ContainerLink>
      </Container>
  );
}