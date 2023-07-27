import redux from 'redux';
import { MODAL_ACTION_TYPES } from './modal-types';

//initial state closed
const MODAL_INITIAL_STATE = {
  isOpen: false,
  currenCategory: ''
}

const modalReducer = (
    state = MODAL_INITIAL_STATE, 
    action
) => {

    const { type, payload } = action;
    const { SET_MODAL_CATEGORY, TOGGLE_MODAL } = MODAL_ACTION_TYPES;

    switch (type) {

      case SET_MODAL_CATEGORY:
        return {...state, currentCategory: payload};

      case TOGGLE_MODAL:
        return {...state, isOpen: !payload.isOpen}

      default: 
        return state;
    }
  }

export default modalReducer;