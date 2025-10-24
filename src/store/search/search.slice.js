import { createSlice } from "@reduxjs/toolkit"
import { getFilmsByName } from "./search.actions"

// const initialState = {
//     films: {},
//     isLoading: false,
//     error: null
// }

export const searchSlice = createSlice({
        name: "searchs",
        initialState:{
            isLoading: false,
            error: null,
            type: "",
            query: "",
            search: {},
            film: {}
        },
        reducers: {

        },
        extraReducers: (builder) => {
            builder
            .addCase(getFilmsByName.pending, state => {
                state.isLoading = true
            })
            .addCase(getFilmsByName.fulfilled, (state, action) => {
                state.isLoading = false
               
                state.search = action.payload.search

                state.film = action.payload.film
                
            })
            .addCase(getFilmsByName.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
        }
    })

// export const { actions, reducer } = searchSlice
