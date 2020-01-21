import React from 'react';
import {setSteta} from 'react';
import InitialInfo from './componentes/InitialInfo';
import Navbar from '../../components/Navbar';
import Team from './componentes/Team'
import AboutUs from './componentes/AboutUs';
import Presentation from './componentes/Presentation';
import GetDownload from './componentes/GetDownload';

export default function HomeSite() {

  return (
    <>
      <Navbar />
      <InitialInfo />
      <Team />
      <AboutUs />
      <Presentation />
      <GetDownload />
    </>
  );
}
