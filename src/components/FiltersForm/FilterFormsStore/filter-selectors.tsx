import { createSelector } from '@reduxjs/toolkit';


const selectFilterState = (state) => state.filter;

export const selectCategoryByName = (categoryName) => 
    createSelector(selectFilterState, (filterState) => filterState[categoryName]);

export const selectOptionsForCategory = (categoryName) => 
    createSelector(selectCategoryByName(categoryName), (category) => category.options);

export const selectNumOptionsSelected = (categoryName) =>
    createSelector(selectCategoryByName(categoryName), (category) => category.numOptionsSelected);

