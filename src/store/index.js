import { createStore }from 'redux';
// import { clickListCategory } from './reducers/clickListCategory';
// import { clickListProfission } from './reducers/clickListProfission';
import reducers from './reducers';
export default createStore(
    reducers
);
