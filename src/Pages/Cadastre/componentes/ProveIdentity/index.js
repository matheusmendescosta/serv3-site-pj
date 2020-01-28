import React from 'react';
import { 
  Container,
  ContainerInformation
} from './styles';
import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';

export default function ProveIdentity() {
  return (
    <Container>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />  
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Comprove sua Identidade</h1>
        <p class="lead">Aqui você pode comprovar sua identidade apresentando fotos de seus documentos.  </p>
      </div>
    </div>
      <ContainerInformation class="form-group border border-dark">
        <form>
          <div class="form-group shadow p-3 mb-5 bg-white rounded">        
            <label for="exampleFormControlFile1">RG ou CNH</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
          </form>
      </ContainerInformation>

      <ContainerInformation>
        <form>
          <div class="form-group shadow p-3 mb-5 bg-white rounded">
            <label for="exampleFormControlFile1">Comprovante de Residencia</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
        </form>
      </ContainerInformation>

      <ContainerInformation>
        <form>
          <div class="form-group shadow p-3 mb-5 bg-white rounded">
            <label for="exampleFormControlFile1">Foto de Perfil</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
        </form>
    </ContainerInformation>

    <ContainerInformation>
    <form>
      <div class="form-group shadow p-3 mb-5 bg-white rounded">
        <label for="exampleFormControlFile1">Selfi com RG ou CNH</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
      </div>
    </form>
    </ContainerInformation>
    <Link to='/Cadastre'>Voltar</Link> <br />    
    <Link to='/SelectService'>Prosseguir</Link>    
    </Container>
  );
}
