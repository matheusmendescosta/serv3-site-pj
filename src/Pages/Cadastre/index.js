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
  Button,
  ContentForm,
  LabelForm,
  InputForm,
  ContentButton,
} from './styles';
import Navbar from '../../components/Navbar';
import Information from '../Cadastre/componentes/Information/'
import {Formik} from 'formik';
import ProveIdentity from './componentes/ProveIdentity';
import SelectService from './componentes/SelectService';
import colors from '../../Config/colors';

export default function Cadastre() {

  const [initialValues, setInitialValues ] = useState({
    fistName: '',
    secondName:''
  });

  const [steps, setSteps] = useState(1);

  const [header, setHeader] = useState({
    title: "informações Pessoais",
    desc: "Aqui você preenche suas informações pessoais"
  })

  function handleSubmit(){

  }

  function PressBack (){
    switch (steps) {
        case 1:
          
            break;
        case 2:
          setSteps(1)
        break; 
        case 3:
          setSteps(2)
        break; 
        default:
            break;
    }
};

function PressContinue (){
  switch (steps) {
      case 1:
        setSteps(2)
        setHeader ({
          title:"Comprove sua identidade",
          desc: "Aqui você pode comprovar sua identidade"
        })  
          break;
      case 2:
        setSteps(3)
        setHeader ({
          title:"Selecione os serviços",
          desc: "Aqui você pode selecionar seus serviços"
        }) 
          break; 
      default:
          break;
  }
};

  return (
    <Container>
    <Navbar />
        <ContentCard>
            <HeaderCard>
                <HeaderTitle>
                  <TitleCard>
                    {
                    header.title
                    }
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
              ): 
              steps == 3 ?
              (
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                >
                  <SelectService />
                </Formik>
              ): (null)  
            }
          <ContentButton>    
            <Button background={(colors.primary)} onClick={PressBack}>Voltar</Button>
            <Button onClick={PressContinue}>Avançar</Button>
          </ContentButton>
          {/* <button> <Link to="./ServiceCategory">Pross</Link> </button> */}
        </ContentCard>
    </Container>
  );
}
