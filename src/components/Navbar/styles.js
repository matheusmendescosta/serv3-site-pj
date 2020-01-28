import styled from 'styled-components';
import colors from '../../Config/colors';
import px2vw from '../../Config/px2vw';

export const Container = styled.div`
  height: 120px;
  width:100%;
  padding:${px2vw(20)};
  background-color: ${colors.colorNavbar};
  position: fixed;
  top:0;
  left:0;
  right:0;
  display:flex;
  flex-direction:row;
  /* justify-content:flex-start; */
  align-items: center;
  justify-content: space-between;

  @media (max-width:800px){
    padding:${px2vw(10)};
    justify-content:center;
  }

`;

export const ContainerLogo = styled.div`
  
`;

export const Logo = styled.img`
  width: 90px;
  height:90px;
`;

export const ContainerLink = styled.div`
  display: block;
  float: right;
  margin-top:20px;

  @media (max-width:800px){
    display:none;
  }
`;

export const IntemLink = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  float: right;
`;

export const StyleLink = styled.li`
  font-family: 'Roboto', sans-serif;
  display: block;
  float: left;
  text-decoration: none;
  text-align: center;
  padding:20px 10px;
  color:${colors.white};
  a:hover{
    color:${colors.SecondaryColor};
  }
`;

export const LinkHover = styled.a`
  
`;