import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100%;
  height:85vh;
  background-color:${colors.AboutUsColor};
  display:absolote;
`;
export const ContainerText = styled.div`

`;

export const Text = styled.h1`
  color:${colors.white};
  padding-top: 25vh;
  padding-left:31vh;
`;

export const ContainerContentText = styled.div`

`;

export const ContentText = styled.p`
  color:${colors.white};
  padding-top: 1vh;
  padding-left:31vh;
`;

export const ContainerImage = styled.div`
  padding-bottom:80px;
`;

export const Image = styled.img`
  display: relative;
  float: right;
  margin-right:25vh;
  padding-bottom:0vh;
`;