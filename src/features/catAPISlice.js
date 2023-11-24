import { createSlice } from "@reduxjs/toolkit";

const catAPISlice = createSlice({
    name: "cats",
    initialState: {
        cats: [],
        isLoading: false,
    },
    reducers: {
        getAPIFetch : (state) => {
            state.isLoading = true;
        },
        successAPIFetch: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        failureAPIFetch: (state) => {
            state.isLoading = false;
        }
    }
})

export const {getAPIFetch, successAPIFetch, failureAPIFetch} = catAPISlice.actions;

export default catAPISlice.reducer;