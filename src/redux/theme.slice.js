import { createSlice } from "@reduxjs/toolkit";
import { DARK, LIGHT } from "styles/theme/themes";

const initialState = {
    mode: "browser", // browser || light || dark
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThemeMode: (state, action) => {
            state.mode = action.payload.mode;
        },
        toggleTheme: (state, action) => {
            state.mode = state.mode === DARK ? LIGHT : DARK;
        },
    },
});

export const { setThemeMode, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
