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
import ProveIdentity from './componentes/ProveIdentity';

export default function Cadastre() {

  const [initialValues, setInitialValues ] = useState({
    fistName: '',
    secondName:''
  });

  const [steps, setSteps] = useState(1);

  const [header, setHeader] = useState({
    title: "Comprove sua identidade",
    desc: "Aqui você pode comprovar sua identidade"
  })

  function handleSubmit(){

  }

  return (
    <Container>
    <Navbar />
        <ContentCard>
            <HeaderCard>
                <HeaderTitle>
                  <TitleCard>
                    {header.title}
                  </TitleCard>
                  <DescCard>
                    {header.desc}
                  </DescCard> 
                </HeaderTitle>
            </HeaderCard>
            {
              steps == 1 ? 
              (
                <Formik 
                  initialValues={initialValues}
                  onSubmit={handleSubmit} 
                >
                  <Information />
                </Formik>
              ):
              steps == 2 ?
              (
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                >
                  <ProveIdentity />
                </Formik>
              ): (null)  
            }

        </ContentCard>       
    </Container>
  );
}
