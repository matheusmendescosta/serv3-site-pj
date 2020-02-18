import React, { useState, useEffect } from 'react';
import {
    ContentForm,
    InputForm,
    LabelForm,
    RowForm,
    ColumnForm,
 } 
from './styles';
export default function Information() {

    const [information, setInformation] = useState("Informações Pessoais");

    useEffect(()=>{
        document.title = `${information}`;
    })

  return (
    
    <ContentForm>
        <RowForm>
            <ColumnForm size={50}>
                <LabelForm >Primeiro Nome</LabelForm>
                <InputForm 
                name="fistName"
                placeholder="Primeiro nome"
                type="text"
                />                
            </ColumnForm>

            <ColumnForm size={50}>
                <LabelForm>Segundo Nome</LabelForm>
                <InputForm 
                name="secondName"
                placeholder="Segundo nome"
                type="text"
                />  
            </ColumnForm>
        </RowForm>

            <RowForm >
                <ColumnForm >
                    <LabelForm>Apelido</LabelForm>
                    <InputForm 
                    name="secondName"
                    placeholder="Seu Apelido"
                    type="text"
                    />  
                </ColumnForm>                  
            </RowForm>
            <RowForm>
                <ColumnForm>
                    <LabelForm>Genero</LabelForm>
                    <InputForm 
                    name="genere"
                    placeholder="Seu Genero"
                    type="text"
                    />                  
                </ColumnForm>
            </RowForm>
            <RowForm>
                <ColumnForm>
                    <LabelForm>Aniversario</LabelForm>
                    <InputForm 
                    name="birthday"
                    placeholder="DD/MM/AAAA"
                    type="text"
                    />                  
                </ColumnForm>                    
            </RowForm>
            <RowForm>
                <ColumnForm>
                    <LabelForm>Email</LabelForm>
                    <InputForm 
                    name="email"
                    placeholder="user@exemplo.com"
                    type="text"
                    />                    
                </ColumnForm>    
            </RowForm>
                
            <RowForm>
                <ColumnForm>
                    <LabelForm>CPF</LabelForm>
                    <InputForm 
                    name="cpf"
                    placeholder="000.000.000.00"
                    type="text"
                    />                     
                </ColumnForm>
            </RowForm>
            <RowForm>
                <ColumnForm>
                    <LabelForm>Numero de celular</LabelForm>
                    <InputForm 
                    name="phone"
                    placeholder="(00)0 0000-0000"
                    type="text"
                    />                     
                </ColumnForm>
            </RowForm>
            <RowForm>
                <ColumnForm>
                    <LabelForm>CEP</LabelForm>
                    <InputForm 
                    name="cep"
                    placeholder="Digite seu CEP"
                    type="text"
                    />                     
                </ColumnForm>
            </RowForm>

        <RowForm>
            <ColumnForm size={50} >
                <LabelForm>Nome da Rua</LabelForm>
                <InputForm 
                    name="Street"
                    placeholder="Digite sua rua"
                    type="text"
                    />                     
            </ColumnForm>
            
            <ColumnForm size={50}>
                <LabelForm>Bairro</LabelForm>
                <InputForm 
                    name="neighborhood"
                    placeholder="Digite seu bairro"
                    type="text"
                    />     
            </ColumnForm>
        </RowForm>
        <RowForm>
            <ColumnForm size={50}>
                <LabelForm>Cidade</LabelForm>
                <InputForm 
                    name="city"
                    placeholder="Digite sua cidade"
                    type="text"
                    />                     
            </ColumnForm>
            
            <ColumnForm size={50}>
                <LabelForm>Estado</LabelForm>
                <InputForm 
                    name="state"
                    placeholder="Digite seu estado"
                    type="text"
                    />     
            </ColumnForm>
        </RowForm>
    </ContentForm>
  );
  
}
