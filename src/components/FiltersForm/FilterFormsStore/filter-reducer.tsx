import redux from 'redux';
import { FILTER_ACTION_TYPES } from './filter-types';
import { filter } from 'lodash';

// Template for what every category will look like 
const filterInitialStateTemplate = {
    category: '',
    numOptionsSelected: 0,
    //categoryNameText: `Select a ${category}`,
    options: {
        option1: false,
        option2: false,
        option3: false,
    },
  };


// make request to algolia inside the reducer called initializeFilters
// initializing categories
const filterInitialState = {
    partner: {...filterInitialStateTemplate},
    skills: {...filterInitialStateTemplate},
    subject: {...filterInitialStateTemplate},
}


const filterReducer = (
    state = filterInitialState, 
    action
) => {

    const { ADD_CATEGORIES, SET_CATEGORY, TOGGLE_OPTION, CLEAR_FORM } = FILTER_ACTION_TYPES;
    
    const { type, payload } = action;
    

    switch (type) {

        case ADD_CATEGORIES: // initialize categories here but only if we request to algolia
            const { category, initialOptions } = payload;
            //get the initial options?

            const optionValues = Object.keys(initialOptions).reduce((options, optionName) => {
                options[optionName] = false;
                return options;
                }, {});

            const newCategoryState = {
                ...filterInitialState,
                category,
                options: {...filterInitialState, ...optionValues},
            }
            console.log(newCategoryState);
            return {
                ...state,
                [category]: newCategoryState,
            };

        case SET_CATEGORY:
            console.log(category);
            return {
                ...state, 
                [category]: {
                    ...state[category],
                    category: payload.value,
                }
            };

        case TOGGLE_OPTION: {
            const { category, option } = payload;

            const updatedOptions = {
                ...state[category].options,
                [option]: !state[category].options[option],
            };

            const updatedState = {
                ...state,
                [category]: {
                    ...state[category],
                    options: updatedOptions,
                },
            };

            // calculate numOptionsSelected for the category (calculate the number of options toggled to true)
            const numOptionsSelected = Object.values(updatedOptions).filter((value)  => value === true).length;
            console.log(numOptionsSelected);
            console.log(updatedState);
            return {
                ...updatedState, 
                [category]: {
                    ...updatedState[category],
                    numOptionsSelected,
                },
            };
        } 


        case CLEAR_FORM:
      
        default: 
            return state;
    }
  }

export default filterReducer;