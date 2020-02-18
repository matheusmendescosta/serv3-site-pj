import React, { useState, useEffect } from 'react';

import { 
    Container 
} from './styles';

export default function SelectProfission() {
    const [profission, setProfission] = useState('Seleção de profissional');

    useEffect(()=>{
        document.title=`${profission}`;
    })

  return (
    <Container>
        olá profissional
    </Container>
  );
}
