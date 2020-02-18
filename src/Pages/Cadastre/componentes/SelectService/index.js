import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Input, 
  Button 
} from './styles';

export default function SelectService() {

  const [SelectService, useSelectService] = useState('Selecione o servico');

  useEffect(()=>{
    document.title=`${SelectService}`;
  })
  // function handleInputService(){
  //   alert('selecionou');
  // }
  const ListCategory = useSelector (state => state.categorys);
  
  return (
    <>  
      <Container>
        <Input />  
        <ul>
          {ListCategory.map(categorys => <li key={categorys}>{categorys}</li>)}
        </ul>
      </Container>
    </>  
  );
}
