import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: film}) => {
            const isExsists = state.some(f => f.imdbID === film.imdbID)
            if(isExsists){
                const index = state.findIndex(item => item.imdbID === film.imdbID)
                if (index != -1){
                    state.splice(index, 1)
                localStorage.setItem("favoritesLocal", JSON.stringify(state))
                }
            } else {
                state.push(film)
                localStorage.setItem("favoritesLocal", JSON.stringify(state))
             }
        },
        addFavoritesLocal: (state, {payload: favoritesLocal}) => {
            // console.log("favoritesLocal: ", favoritesLocal.length)
            state.unshift(...favoritesLocal, ...state)
        }
    }
})

export const {actions, reducer} = favoritesSlice