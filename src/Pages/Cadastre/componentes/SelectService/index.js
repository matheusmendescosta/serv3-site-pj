import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Title, 
  Button 
} from './styles';
import { Link } from 'react-router-dom';

export default function SelectService() {

  const [services, setServices] = useState([
    {id:1, name:"serviço 1"},
    {id:2, name:"serviço 2"},
    {id:3, name:"serviço 3"},
    {id:4, name:"serviço 4"},
  ]);

  function handleInputService(){
    alert('selecionou');
  }
  return (
    <Container> 
        <select className="custom-select"
        onChange={() => handleInputService()}
        >
          {services.map(serv=>(
          <option key={serv.id}>{serv.name}</option>
          ))}
        </select>
          
          {}

        <br />
    </Container>
  );
}
