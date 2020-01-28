import styled from 'styled-components';
import colors from '../../Config/colors';
import px2vw from '../../Config/px2vw';

export const Container = styled.div`
  /* background-color:${colors.black};   */
  padding-top: 180px;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  display:flex;
  width: 100vw;
  height: 100vh;

  @media (max-width:800px) {
        padding-top:120px;
    }
`;

// export const Content = styled.div`
//   width:100vw;
//   height:100vh;
// `;

export const ContentCard = styled.div`
    width: 45vw;
    border-top-right-radius: 3vh;
    border-top-left-radius: 3vh;
    background-color:${colors.white};
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    /* border-width: 1px;
    border-color:${colors.primary}; */
    border: 1px solid ${colors.primary};

    @media (max-width:800px) {
        width:100vw;
        border-radius:0px;
        border-width: 0px;
    }
`;

export const HeaderCard = styled.div`
    width: 100%;
    max-height: 17vh;
    border-top-right-radius: 3vh;
    border-top-left-radius: 3vh;
    /* background-color:${colors.grey}; */
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: flex-start;
`;

export const HeaderTitle = styled.div`
    width: 85%;
    height: 100%;
    border-bottom-right-radius: 3vh;
    border-bottom-left-radius: 3vh;
    background-color: ${colors.primary};
    padding: ${px2vw(15)};

    @media (max-width:1500px) {
        width:100%;
        border-radius:3vh;
    }

    @media (max-width:800px) {
        width:100%;
        border-radius:0;
    }


`;

export const TitleCard = styled.p`
    font-size:${px2vw(20)};
    text-align: center;
    text-transform: uppercase;
    color:${colors.white};

    @media (max-width:1500px) {
        font-size:${px2vw(35)};
    }

    @media (max-width:800px) {
        font-size:${px2vw(80)};
    }
`;

export const DescCard = styled.p`
    font-size: ${px2vw(14)};
    text-align: center;
    text-transform: uppercase;
    color:${colors.white};

    @media (max-width:800px) {
        font-size:${px2vw(50)};
    }    
`;

export const ContentForm = styled.div`

`;

export const LabelForm = styled.form`

`;

export const InputForm = styled.input`

`;