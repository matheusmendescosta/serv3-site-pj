import styled from 'styled-components';
import colors from '../../../../Config/colors';

export const Container = styled.div`
  width:100%;
  height:40vh; 
  display:grid;
  flex-flow: row wrap;
  border: 4px solid green;
  /* background-color: ${colors.SecondaryColor}; */
`;

export const BannerSlide = styled.div`
  display: flex;
  border: 2px solid yellow;
  width:100%;
  
`;

export const BannerSlideWorker = styled.div`
  width:100%;
  height:120px; 
  border: 3px solid red;
  display: flex;
  
`;
