import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const DiseaseSlice = createSlice({
    name: 'disease',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { addData } = DiseaseSlice.actions;

export const getData = createAsyncThunk(
    'data/fetch',
    (_, { dispatch }) => {
        // try {
        //     const response = await fetch('/data');
        //     const result = await response.json();
        //     console.log(result);
        //     dispatch(addData(result));
        // } catch (err) {
        //     console.log(err);
        // }

        fetch('/data').then(response => {
            if(response.ok){
                response.json().then(result => {
                    dispatch(addData(result));
                }).catch(err => window.alert(err.message));
            }else{
                if(response.status === 500) return window.alert("Check your internet connection")
                return window.alert("Something went wrong!!")
            }
        })
    }
);

export default DiseaseSlice.reducer;