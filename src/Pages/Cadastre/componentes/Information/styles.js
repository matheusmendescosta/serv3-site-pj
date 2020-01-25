import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:${colors.CadastreBgColor};
`;

export const ContainerCadastre = styled.div`  
  width: 100%;
  justify-content: center;
  background: ${colors.white};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 60px 80px;  
  margin-top: 120px;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  display: block;
  color: ${colors.black};
`;

export const InputBlock = styled.label`
  color:'#ACACAC';
  font-size:14px;
  font-weight: bold;
  display: block;
  margin-top: 20px;
  font: 400 1rem/1.5rem "Open Sans", sans-serif;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: '#666';
  border: 0;
  border-bottom: 1px solid #eee;
`;