import React, { useState, useEffect } from 'react';

import {
    Container 
} from './styles';

export default function SelectServiceKit() {

  const [kit, setKit] = useState('Selecione um kit');

  useEffect(()=>{
    document.title=`${kit}`;
  })
  return (
    <Container>
        Selecinar Kit
    </Container>
  );
}
