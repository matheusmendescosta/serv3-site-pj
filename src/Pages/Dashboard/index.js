import React from 'react';

import { 
    Container 
} from './styles';
import Login from './Login';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
  return (
    <Container>
        <Navbar />
        <Login />
    </Container>
  );
}
