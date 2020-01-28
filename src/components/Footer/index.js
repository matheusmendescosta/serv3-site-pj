import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { 
    Container, AboutTitle, AboutText, ContainerAbout, LinkTitle, LinkText 
} from './styles';

export default function Footer() {
  return (
    <Container>
         <Row vertical='center' wrap={true} horizontal='center'>
          
                <Column vertical='center' flexGrow={4} horizontal='center'>
                    <AboutTitle>Sobre</AboutTitle>
                        <AboutText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </AboutText>
                </Column>
          
          
                <Column vertical='center' flexGrow={4} horizontal='center'>
                    <LinkTitle>Links Importantes</LinkTitle>
                        <AboutText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </AboutText>
                </Column>

                <Column vertical='center' flexGrow={4} horizontal='center'>
                    <LinkTitle>Links Importantes</LinkTitle>
                        <AboutText>
                            Somos uma empresa que de forma simples,<br /> 
                        uni pessoas a serviços!
                        </AboutText>
                </Column>
         </Row>
    </Container>
  );
}
