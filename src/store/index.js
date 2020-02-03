import { createStore }from 'redux';
import { clickListCategory } from './reducers/clickListCategory';

export default createStore(
    clickListCategory
);