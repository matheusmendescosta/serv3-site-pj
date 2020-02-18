import React, { useState, useEffect } from 'react';
import InitialInfo from './componentes/InitialInfo';
import Navbar from '../../components/Navbar';
import Team from './componentes/Team'
import AboutUs from './componentes/AboutUs';
import Presentation from './componentes/Presentation';
import GetDownload from './componentes/GetDownload';
import Contact from './componentes/Contact';
import Footer from '../../components/Footer';

export default function HomeSite() {

  const [home, setHome] = useState("Serv3");

  useEffect(()=>{
    document.title=`${home}`;
  })

  return (
    <>
      <Navbar />
      <InitialInfo />
      <Team />
      <AboutUs />
      <Presentation />
      <GetDownload />
      <Contact />
      <Footer />
    </>
  );
}
