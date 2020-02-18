import React, { useState, useEffect } from 'react';

import { 
    Container,

} from './styles';

export default function ServiceCategory() {

  const [category, setCategory] = useState('Selecione a categoria');

  useEffect(()=>{
    document.title=`${category}`;
  })
  return (
    <Container>
        Aqui ta dando erro pra passar pra proxima page
    </Container>
  );
}
