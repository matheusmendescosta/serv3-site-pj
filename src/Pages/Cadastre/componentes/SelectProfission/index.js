import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
    Container 
} from './styles';

export default function SelectProfission() {
    const [profission, setProfission] = useState('Seleção de profissional');

    useEffect(()=>{
        document.title=`${profission}`;
    })

    const ListCategoryProffision = useSelector (state => state.categorys);

  return (
    <Container>
        <ul>
          {ListCategoryProffision.map(categorys => <li key={categorys}>{categorys}</li>)}
        </ul> 
    </Container>
  );
}
