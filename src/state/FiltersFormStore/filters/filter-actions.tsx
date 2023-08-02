import { createAction } from '@reduxjs/toolkit';
import { FILTER_ACTION_TYPES } from './filter-types';


export const addCategories = createAction<{ category: string; initialOptions: [] }>(
    FILTER_ACTION_TYPES.ADD_CATEGORIES,
);
  
export const toggleOption = createAction<{category: string; option: string}> (
    FILTER_ACTION_TYPES.TOGGLE_OPTION,
);
  
export const setCategory = createAction<{category: string}> (
    FILTER_ACTION_TYPES.SET_CATEGORY,
);

export const clearForm = createAction(
    FILTER_ACTION_TYPES.CLEAR_FORM,
);