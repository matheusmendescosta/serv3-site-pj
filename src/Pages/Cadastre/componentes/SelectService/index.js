import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  Container, 
  Input, 
  Button 
} from './styles';
import { Link } from 'react-router-dom';

export default function SelectService() {
  // function handleInputService(){
  //   alert('selecionou');
  // }
  const ListCategory = useSelector (state => state.categorys);
  
  return (
    <Container>
      <Input />  
      <ul>
        {ListCategory.map(categorys => <li key={categorys}>{categorys}</li>)}
      </ul>
    </Container>
  );
}
