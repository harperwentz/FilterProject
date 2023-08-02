import {combineReducers } from 'redux';

import filterReducer from './filters/filter-reducer';
import modalReducer  from './modal/modal-reducer';
import { FiltersReduxStoreType } from './types';



const rootReducer = combineReducers<FiltersReduxStoreType>({
    filters: filterReducer,
    modal: modalReducer
});

export default rootReducer;