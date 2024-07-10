import { configureStore } from '@reduxjs/toolkit'; // used to create the Redux store.
import layoutReducer from './layoutSlice';

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
    },
});