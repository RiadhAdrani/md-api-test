import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import searchReducer from "./search.slice";
import watchListReducer from "./watchlist.slice";

const rootReducer = {
    theme: themeReducer,
    search: searchReducer,
    watchList: watchListReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
