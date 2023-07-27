import { createAction } from '@reduxjs/toolkit';
import { FILTER_ACTION_TYPES } from './filter-types';


export const addCategories = createAction<{ category: string; initialOptions: [] }>(
    'ADD_CATEGORIES'
);
  
export const toggleOption = createAction<{category: string; option: string}> (
    'TOGGLE_OPTION',
);
  
export const setCategory = createAction<{category: string}> (
    'SET_CATEGORY'
);

export const clearForm = createAction<{}> (
    'CLEAR_FORM'
);