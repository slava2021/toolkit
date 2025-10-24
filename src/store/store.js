import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { searchSlice } from "./search/search.slice";

const reducers = combineReducers({
    favorites: favoritesReducer,
    search: searchSlice.reducer,
})

export const store = configureStore({
    reducer: reducers,
}) 