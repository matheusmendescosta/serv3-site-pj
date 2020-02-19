import {
    SET_CATEGORY_PROFFISION,
    SET_LOADING_CATEGORY

} from './actionTypes';

export const setCategorysProfission = (Categorys) => ({
    type: SET_CATEGORY_PROFFISION,
    category: categorys
})

export const setLoadingCategory = (loading) =>({
    type: SET_LOADING_CATEGORY,
    loading: loading
})