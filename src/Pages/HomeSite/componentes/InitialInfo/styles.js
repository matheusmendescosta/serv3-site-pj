import styled from 'styled-components';
import colors from '../../../../Config/colors';
import bg from '../../../../Assets/bg.jpg'

export const Container = styled.div`
  width:100%;
  height:100vh;
  background-color: ${colors.black};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;

`;

export const ContainerBg = styled.div`
  padding-left:50px;
  padding-right:50px;
  padding-top: 120px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  display:flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;

export const Bg = styled.img`
  width:100px;
  height:112px;
`;

export const ContainerBgPhone = styled.div` 
  /* flex: 1; */
  /* display: flex; */
  max-height:600px;
  max-width:580px;
  padding-left:50px;
  /* background-color: black; */
`;

export const BgPhone = styled.img`
  width: 580px;
  height:600px;
`;

export const ContainerText = styled.div`
  /* background-color:black; */
  padding-right: 50px;
  
`;

export const TextTitle = styled.h1`
  color:${colors.white};
  font: 700 3rem/3rem "Montserrat", sans-serif;  
`;

export const SpanText = styled.span`
  color:${colors.SecondaryColor};
  font: 900 2.9rem/3rem "Montserrat", sans-serif; 
`;

export const SimpleText = styled.p`
  font:400 1rem/1.5rem "Open Sans", sans-serif; 
  margin-top:10px;
  color:${colors.white}; 
`;


