import styled from 'styled-components';
import colors from '../../Config/colors';

export const Container = styled.div`
  width:100%;
  padding-top: 8px;
  padding:20px;
  background-color: ${colors.colorNavbar};
  position: fixed;
  top:0;
  left:0;
  right:0;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items: center;
  justify-content: space-between;
  @keyframes fadeDropdown {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`;

export const ContainerLogo = styled.div`
  padding-left:50px;
`;

export const Logo = styled.img`
  width: 110px;
  height:110px;
`;

export const ContainerLink = styled.div`
  display: block;
  float: right;
  margin-top:20px;
`;

export const IntemLink = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  float: right;
`;

export const Link = styled.li`
  font-family: 'Roboto', sans-serif;
  display: block;
  float: left;
  text-decoration: none;
  text-align: center;
  padding:20px 10px;
  color:${colors.white};
`;

export const LinkHover = styled.a`
  
`;