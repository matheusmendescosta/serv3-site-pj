import styled from 'styled-components';
import colors from '../../../../Config/colors';
import { Formik, Form, Field } from 'formik';
import px2vw from '../../../../Config/px2vw';

export const ContentForm = styled(Form)`
    /* background-color:grey; */
    width: 85%;
    height:100%;
    padding: ${px2vw(50)};
`;

export const RowForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width:1500px) {
        justify-content:center;
    }
    /* background-color:black; */
`;

export const ColumnForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    padding:10px;   

    width:${props =>props.size ? props.size: 100}%;

    @media (max-width:1500px) {
        width:100%;
    }
    /* background-color:red; */
`;

export const LabelForm = styled.label`
    text-align:left;
    /* background-color:white; */
    width:100%;
    color:${colors.primary};
    
`;

export const InputForm = styled(Field)`
        ::-webkit-input-placeholder { 
    color: ${colors.grey};
    }
    /* Firefox 19+ /
    ::-moz-placeholder { 
    color: green;
    }
    / IE 10+ /
    :-ms-input-placeholder { 
    color: green;
    }
    / Firefox 18- */
    :-moz-placeholder { 
    color: green;
    }
    border-width:1px;
    border-radius:${px2vw(7)};
    padding:${px2vw(5)};
    width:100%;
    background-color:${colors.greylow};
    border-color:${colors.primary};

    @media (max-width:1500px) {
        border-radius:${px2vw(35)};
    }
`;
