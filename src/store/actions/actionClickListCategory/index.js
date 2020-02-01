import {
    SET_CATEGORY,
    SET_LOADING_CATEGORY

} from './actionTypes';

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category: category
})

export const setLoadingCategory = (loading) =>({
    type: SET_LOADING_CATEGORY,
    loading: loading
})