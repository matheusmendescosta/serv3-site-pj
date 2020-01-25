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
    TextPanel,
    StyleButton,
 } from './styles';

export default function AboutUs() {



  return (
    // <div id="features" className="tabs">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <h2>Quem Somos</h2>
    //           <div class="p-heading p-large">
    //             Somos uma empresa, que levamos muito a serio nossos tres pilares. <br />
    //             Missão, Visão e Valores, pois entendemos que isso mostra a real identidade da Serv3.
    //           </div>

    //           <div className="row">
    //             <ul class="nav nav-tabs" id="lenoTabs" role="tablist">
    //                 <li class="nav-item">
    //                     <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class=""></i>Missão</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class=""></i>Visão</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class=""></i>Valores</a>
    //                 </li>
    //             </ul>

    //             <div class="tab-content" id="lenoTabsContent">
    //                 <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
    //                     <div class="container">
    //                         <div class="row">
    //                                 <div class="col-lg-12">
    //                                         <div class="p-heading p-large">Nunca foi tão facil encontrar um serviço em Macapá de uma
    //                                              forma tão confiavel. Tudo na palma de sua mão.</div>
    //                                 </div>
    //                         </div>
    //                     </div>
    //                 </div>



    //                 <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
    //                     <div class="container">
    //                         <div class="row">
                                
    //                                 <div class="col-lg-12">                                            
    //                                         <div class="p-heading p-large">Nunca foi tão facil encontrar um serviço em Macapá de uma
    //                                              forma tão confiavel. Tudo na palma de sua mão.</div>
    //                                 </div>
    //                         </div>
    //                     </div>
    //                 </div>



    //                 <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
    //                     <div class="container">
    //                         <div class="row">
    //                                 <div class="col-lg-12">                                            
    //                                         <div class="p-heading p-large">Nunca foi tão facil encontrar um serviço em Macapá de uma
    //                                              forma tão confiavel. Tudo na palma de sua mão.</div>
    //                                 </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    

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
                   {/* <div className="nav justify-content-center" id="nav-tab">

                     <div className="nav-item ">
                      <Tab>
                        <StyleButton>Missão</StyleButton>
                      </Tab>
                    </div>
                   <div className="nav-item">
                      <Tab>
                        <StyleButton>Visão</StyleButton>
                      </Tab>
                   </div>
                   <div className="nav-item">
                      <Tab>
                        <StyleButton>Valores</StyleButton>
                      </Tab>
                   </div>

                   </div> */}
                   <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link active"> 
                       <Tab>
                        <StyleButton>Missão</StyleButton>
                      </Tab></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                      <Tab>
                        <StyleButton>Visão</StyleButton>
                      </Tab></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link">
                      <Tab>
                        <StyleButton>Valores</StyleButton>
                      </Tab></a>
                      </li>
                   </ul>
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
