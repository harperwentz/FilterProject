import {combineReducers } from 'redux';

import filterReducer from './filter-reducer';
import modalReducer  from './modal-reducer';



const rootReducer = combineReducers({
    filter: filterReducer,
    modal: modalReducer
});

export default rootReducer;