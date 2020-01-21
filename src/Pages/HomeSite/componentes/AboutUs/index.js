import React from 'react';
import { Tabs, Tab, Panel } from '@bumaga/tabs';
 
// import TabList from "react-tab-list";
// import Tabs from 'react-bootstrap/Tabs'
import { 
    Container, 
    ContainerTitle,
    Title,
    Text,
    ButtonStylized,
    TextPanel
 } from './styles';

export default function AboutUs() {



  return (
    <Container>
        <ContainerTitle>
          <Title>Quem Somos</Title>
            <Text>Somos uma empresa, que levamos muito a serio nossos tres pilares.<br /> 
                  Missão, Visão e Valores, pois entendemos que <br />
                  isso mostra a real identidade da Serv3.
            </Text>
            <Title>
              <Tabs>
              <ButtonStylized>
                  <Tab><button variant="light">Missão</button></Tab>
                  <Tab><button>Visão</button></Tab>
                  <Tab><button>Valores</button></Tab>
              </ButtonStylized> 
                <TextPanel>  
                  <Panel>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                      Maecenas purus libero, pharetra sed blandit in, tempus in dui. <br />
                      Quisque commodo nisi nisi, tincidunt semper nisi tempor ac.<br />
                    </p>
                  </Panel>
                  <Panel>
                    <p>Integer viverra, leo ut posuere tempor, quam tortor <br />
                      tincidunt elit, id laoreet ante sapien quis felis. Aliquam <br />
                      dignissim ante eget justo hendrerit efficitur.<br />
                    </p>
                  </Panel>
                  <Panel>
                    <p>Nunca foi tão facil encontrar um serviço em Macapá <br />
                    de uma forma tão confiavel. Tudo na palma de sua mão.<br />
                    </p>
                  </Panel>
                </TextPanel>
              </Tabs>
            </Title>
        </ContainerTitle>
    </Container>
  );
}
