import {
    SET_CATEGORY_PROFFISION,
    SET_LOADING_CATEGORY
} from '../actions/actionClickListProfission/actionTypes';

const initialState = {
    categorys:[ 'Faxineira', 'padeiro', 'programador' ],
    loading:false
}

export function clickListProfission (state = initialState, action){
    switch (action.type) {
        case SET_CATEGORY_PROFFISION:
            return{ ...state, categorys: action.categorys}
        break;
        
        case SET_LOADING_CATEGORY:
            return{ ...state, loading: action.categorys}
        break;
        default:
            return state;
    }
}    