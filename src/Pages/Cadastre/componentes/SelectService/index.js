import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Input, 
  Button 
} from './styles';
import { Link } from 'react-router-dom';

export default function SelectService() {

  function handleInputService(){
    alert('selecionou');
  }

  return (
    <Container>
      <Input /> 
      {/* <Link to="./ServiceCategory">ServiceCategory</Link> */}
    </Container>
  );
}
