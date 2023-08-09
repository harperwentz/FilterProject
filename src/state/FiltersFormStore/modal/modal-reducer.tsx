import redux from 'redux';
import { MODAL_ACTION_TYPES } from './modal-types';

//initial state closed
const MODAL_INITIAL_STATE = {
  isOpen: false,
  currentCategory: ''
}

const modalReducer = (
  state = MODAL_INITIAL_STATE,
  action
) => {

  const { type, payload } = action;
  const { SET_MODAL_CATEGORY, TOGGLE_MODAL, OPEN_MODAL_TO_CATEGORY } = MODAL_ACTION_TYPES;

  switch (type) {

    case SET_MODAL_CATEGORY:
      return { ...state, currentCategory: payload.category };

    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen }

    case OPEN_MODAL_TO_CATEGORY:
      return { ...state, currentCategory: payload.category, isOpen: !state.isOpen }

    default:
      return state;
  }
}

export default modalReducer;