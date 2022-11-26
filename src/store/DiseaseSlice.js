import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const DiseaseSlice = createSlice({
    name: 'disease',
    initialState,
    reducers:{
        addData: (state,action) => {
            state.data = action.payload
        }
    }
});

export const {addData} = DiseaseSlice.actions;

export const getData = createAsyncThunk(
    'data/fetch',
   async (_, {dispatch}) => {
    const response = await fetch('/data');
    const result = await response.json();
    console.log(result);
    dispatch(addData(result));
   }
);

export default DiseaseSlice.reducer;