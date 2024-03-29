import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100%;
  height:50vh;
  background-color: ${colors.AboutUsColor};
`;

export const ContainerTitle = styled.div`
   
`;

export const Title = styled.h1`
  text-align:center;
  color:${colors.white};
  padding-top:60px;
  font: 700 3rem/3rem "Montserrat", sans-serif;     
`;

export const ContainerText = styled.div`

`;

export const Text = styled.p`
  text-align:center;
  /* padding-top:10px; */
  color:${colors.white};
  font-size:20px;
`;

export const ButtonStylized = styled.div`

`;

export const TextPanel = styled.p`
	margin-bottom: 3.75rem;
	text-align: center;
  font: 400 1rem/1.5rem "Open Sans", sans-serif;
`;

export const ContainerStyleButton = styled.div`

`;

export const StyleButton = styled.button`
  color:${colors.SecondaryColor};
  font-size:20px;
`;