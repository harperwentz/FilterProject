import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer  from './filterform-rootreducer'


const store = configureStore({
    reducer: rootReducer,
});

export default store;