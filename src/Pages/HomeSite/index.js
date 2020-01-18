import React from 'react';
import {setSteta} from 'react';
import InitialInfo from './componentes/InitialInfo';
import Navbar from '../../components/Navbar';
import Team from './componentes/Team'

export default function HomeSite() {

  return (
    <>
      <Navbar />
      <InitialInfo />
      <Team />
    </>
  );
}
