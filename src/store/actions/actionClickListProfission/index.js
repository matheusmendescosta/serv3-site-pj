import {
    SET_CATEGORY,
    SET_LOADING_CATEGORY

} from './actionTypes';

export const setCategorys = (categorys) => ({
    type: SET_CATEGORY,
    category: categorys
})

export const setLoadingCategory = (loading) =>({
    type: SET_LOADING_CATEGORY,
    loading: loading
})