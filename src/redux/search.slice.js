import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: [],
    query: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

export const { setResult, setQuery } = searchSlice.actions;

export default searchSlice.reducer;
