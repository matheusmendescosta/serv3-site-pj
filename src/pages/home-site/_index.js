import React, {setState} from 'react'
import { Navbar, Logo } from '../../components/navbar/styles'
import logo from '../../assets/logo.png'

export default function _index() {

    return(
        <div>
            <Navbar>
                <Logo>
                    <img src={logo} width="120" height="120" alt="serv3"/>
                </Logo>
            </Navbar>
        </div>

        
    );
}