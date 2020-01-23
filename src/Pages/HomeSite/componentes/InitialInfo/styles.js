import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100%;
  height:99vh;
  background-color: ${colors.black};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const ContainerBg = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  padding: 100px 0;
`;

export const Bg = styled.img`
  width:100%;
  height:112%;
`;

export const ContainerBgPhone = styled.div`
  float:right;
  margin-left:55%;
  position:absolute;
  margin-top:-40%;
`;

export const BgPhone = styled.img`
  width: 500px;
  height:500px;
`;

export const ContainerText = styled.div`
  position: absolute;
  float: right;
  margin-left:20%;
  margin-top: -30%;
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


