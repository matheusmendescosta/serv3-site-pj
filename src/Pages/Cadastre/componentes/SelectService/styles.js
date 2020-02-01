import styled from 'styled-components';
import colors from '../../../../Config/colors';
import px2vw from '../../../../Config/px2vw';

export const Container = styled.div`
  /* background-color:${colors.CadastreBgColor}; */
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: "Selecione um serviço",
  // size: props.small ? 5 : undefined,
}))`
  border-radius: 5px;
  border: 1px solid ${colors.primary};
  display: block;
  margin: 5vh;
  width:${px2vw(400)};
  padding: 8px;

  ::placeholder {
    color: ${colors.black};
  }
`