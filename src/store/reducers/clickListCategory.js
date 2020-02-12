import {
    SET_CATEGORY,
    SET_LOADING_CATEGORY
} from '../actions/actionClickListCategory/actionTypes';


const initialState = {
    categorys:[ 'pedreiro', 'padeiro', 'programador' ],
    loading:false
}

export function clickListCategory (state = initialState, action){
    switch (action.type) {
        case SET_CATEGORY:
            return{ ...state, categorys: action.categorys}
        break;
        
        case SET_LOADING_CATEGORY:
            return{...state, loading: action.categorys}
        break;
        default:
            return state;
    }
}

