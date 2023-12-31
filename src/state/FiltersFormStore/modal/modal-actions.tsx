import { createAction } from '@reduxjs/toolkit';
import { MODAL_ACTION_TYPES } from './modal-types';


export const setModalCategory = createAction<{ category: string }>(
    MODAL_ACTION_TYPES.SET_MODAL_CATEGORY,
);

export const toggleModal = createAction<{ isOpen: boolean }>(
    MODAL_ACTION_TYPES.TOGGLE_MODAL,
);

export const openModalToCategory = createAction<{ isOpen: boolean, category: string }>(
    MODAL_ACTION_TYPES.OPEN_MODAL_TO_CATEGORY,
);