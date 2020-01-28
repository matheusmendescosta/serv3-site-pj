import React from 'react';
import {Link} from 'react-router-dom';
import { 
  Container,
  // Content,
  ContentCard,
  HeaderCard,
  TitleCard,
  DescCard,
  HeaderTitle,
  ContentForm,
  LabelForm,
  InputForm,
} from './styles';
import Navbar from '../../components/Navbar';
import Information from './componentes/Information';

export default function Cadastre() {
  return (
    <Container>
    <Navbar />
        <ContentCard>
            <HeaderCard>
                <HeaderTitle>
                  <TitleCard>
                    Informções Pessoais
                  </TitleCard>
                  <DescCard>
                    Preencha suas informçãoes pessoais
                  </DescCard> 
                </HeaderTitle>
            </HeaderCard>
              <Information />
            </ContentCard>       
    </Container>
  );
}
