import {configureStore} from '@reduxjs/toolkit';
import DiseaseSlice from './DiseaseSlice';

const store = configureStore({
    reducer: {
        disease : DiseaseSlice
    }
})

export default store;