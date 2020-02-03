import React from 'react';
import { useSelector } from 'react-redux';
import { 
    Container 
} from './styles';


export default function ServiceCategory() {
    const category = useSelector(state => state.ServiceCategory.category);
  
    return (
    <Container>
        olá mundo
        <ul>
            {category.map(setCategorys => <li key={category}>{category}</li>)}
        </ul>
    </Container>
  );
}
