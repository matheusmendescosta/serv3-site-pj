import { createStore }from 'redux';
import { clickListCategory } from './reducers/clickListCategory';
import { clickListProfission } from './reducers/clickListProfission'

export default createStore(
    clickListCategory,

);
