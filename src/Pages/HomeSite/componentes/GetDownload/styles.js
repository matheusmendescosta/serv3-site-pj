import styled from 'styled-components';
import colors from '../../../../Config/colors';
import px2vw from '../../../../Config/px2vw';

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
  font: 700 3rem/3rem "Montserrat", sans-serif;
`;

export const ContainerContentText = styled.div`

`;

export const ContentText = styled.p`
  color:${colors.white};
  padding-top: 1vh;
  padding-left:31vh;
`;

export const ContainerImage = styled.div`
  padding-top:15vh;
`;

export const Image = styled.img`

`;
export const ContentButton = styled.div`
    justify-content: space-between;
    padding-bottom:1px;
    padding-top: 1vh;
    padding-left:30vh;
    /* border: 1px solid rebeccapurple;   */
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 100px;
  border: 2px solid ${colors.primary};
  color: ${colors.white};
  margin: 0 0.3em;
  padding: 0.80em 1em;
  width:${px2vw(175)};
  background-color: ${props =>props.background ? props.background:""};
`
