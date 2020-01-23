import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }

  *{
  margin:0;
  outline:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
         
}
  button{
  background:transparent;
  border:none;
  color:#fff;
  cursor:pointer;
}
`;
