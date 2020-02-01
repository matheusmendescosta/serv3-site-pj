import {
    SET_CATEGORY,
    SET_LOADING_CATEGORY
} from '../actions/actionClickListCategory/actionTypes';


const initialState = {
    category:[  ],
    loading = false
}

export function clickListCategory (state = initialState, action){
    switch (action.type) {
        case SET_CATEGORY:
            return{ ...state, category: action.category}
        break;
        
        case SET_LOADING_CATEGORY:
            return{...state, loading: action.category}
        break;
        default:
            return state;
    }
}

