import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer  from './filterform-rootreducer'


const store = configureStore({
    reducer: rootReducer,
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {filters: FiltersReduxStoreType, modal: ModalReduxStoreType}
export type AppDispatch = typeof store.dispatch

export default store;