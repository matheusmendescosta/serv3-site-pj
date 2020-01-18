import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100%;
  height:200vh;
  background-color: ${colors.white};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
  width:50%;
  height:50vh;
  background-color: ${colors.black};
  margin-top:30px; 
`;
