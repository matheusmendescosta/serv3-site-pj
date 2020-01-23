import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { 
    Container, AboutTitle, AboutText, ContainerAbout, LinkTitle, LinkText 
} from './styles';

export default function Footer() {
  return (
    <Container>
        <Column flexGrow={1}>
         <Row vertical='center'>
          
                <Column flexGrow={1} horizontal='center'>
                    <AboutTitle>Sobre</AboutTitle>
                        <AboutText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </AboutText>
                </Column>
          
          
                <Column flexGrow={1} horizontal='center'>
                    <LinkTitle>Links Importantes</LinkTitle>
                        <LinkText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </LinkText>
                </Column>

                <Column flexGrow={1} horizontal='center'>
                    <LinkTitle>Links Importantes</LinkTitle>
                        <LinkText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </LinkText>
                </Column>
         </Row>
      </Column>
    </Container>
  );
}
