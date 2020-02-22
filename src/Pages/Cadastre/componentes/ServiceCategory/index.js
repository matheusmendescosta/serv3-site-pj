import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Container,

} from './styles';

export default function ServiceCategory() {

  const [category, setCategory] = useState('Selecione a categoria');

  useEffect(()=>{
    document.title=`${category}`;
  })

  const ListCategory = useSelector (state => state.categorys);

  return (
    <Container>
        <ul>
          {ListCategory.map(categorys => <li key={categorys}>{categorys}</li>)}
        </ul>  
    </Container>
  );
}
