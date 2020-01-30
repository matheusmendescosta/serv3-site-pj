import React from 'react';
import { 
  Container,
  ContentForm,
  RowForm,
  LabelForm,
  InputForm,
  ColumnForm
} from './styles';
import { Link } from 'react-router-dom';

export default function ProveIdentity() {
  return (
    <Container>
      <ContentForm>
        <RowForm>
            <ColumnForm size={50}>
                
                <InputForm 
                name="fistName"
                placeholder="Primeiro nome"
                type="file"
                />                
                <LabelForm >Foto do RG ou CNH</LabelForm>
            </ColumnForm>

            <ColumnForm size={50}>
                
                <InputForm 
                name="secondName"
                placeholder="Segundo nome"
                type="file"
                />  
                <LabelForm>Comprovante de Identidade</LabelForm>
            </ColumnForm>
        </RowForm>

        <RowForm>
            <ColumnForm size={50}>
                <InputForm 
                name="fistName"
                placeholder="Primeiro nome"
                type="file"
                />             
                <LabelForm >Selfi com RG ou CNH</LabelForm>   
            </ColumnForm>

            <ColumnForm size={50}>
                
                <InputForm 
                name="secondName"
                placeholder="Segundo nome"
                type="file"
                />  
                <LabelForm>Foto de Perfil</LabelForm>
            </ColumnForm>
        </RowForm>
      </ContentForm>   
    </Container> 
  );
}
