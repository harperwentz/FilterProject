import { createAction } from '@reduxjs/toolkit';
import { MODAL_ACTION_TYPES } from './modal-types';


export const setModalCategory = createAction<{ category: string }> (
    'SET_MODAL_CATEGORY'
);

export const toggleModal = createAction<{ isOpen: boolean }> (
    'TOGGLE_MODAL'
);