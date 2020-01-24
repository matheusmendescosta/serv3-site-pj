import React from 'react';
import bg from '../../../../Assets/bg.jpg';
import bgPhone from '../../../../Assets/bgPhone.png';
import ReactTextRotator from 'react-rotating-text';

import { 
    Container, 
    ContainerBg,
    Bg,
    BgPhone,
    ContainerBgPhone,
    ContainerText,
    TextTitle,
    SpanText,
    SimpleText,
} from './styles';

export default function InitialInfo() {

  var ReactRotatingText = require('react-rotating-text');

  return (
    <Container>
      <ContainerBg>
        {/* <Bg src={bg}/> */}

          <ContainerText>
            <TextTitle>
              SERV3 APP <br /> É
              <SpanText> 
              <ReactRotatingText 
                items={[' PRÁTICO', ' RÁPIDO', ' SEGURO']} />
              </SpanText>
            </TextTitle>
            <SimpleText>
              A Serv3 é uma plataforma digital, que através de um app, <br/>
              conecta pessoas a serviços de uma forma simples e segura!
            </SimpleText>
          </ContainerText> 
          <ContainerBgPhone>
            <BgPhone src={bgPhone}/>
          </ContainerBgPhone>
      </ContainerBg>
    </Container>
  );
}
