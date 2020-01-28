import React, { useState } from 'react';
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
import Information from '../Cadastre/componentes/Information/'
import {Formik} from 'formik';

export default function Cadastre() {

  const [initialValues, setInitialValues ] = useState({
    fistName: '',
    secondName:''
  });

  function handleSubmit(){

  }

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
            <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <Information />
            </Formik>  
        </ContentCard>       
    </Container>
  );
}
