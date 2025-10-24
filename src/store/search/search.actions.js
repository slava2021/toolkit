import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFilmsByName = createAsyncThunk("search/getFilmsByName", 
    async(url, thunkAPI) => {
        console.log("url: ", url);
    try {
        const res = await fetch(url.url + url.value);
        const data = await res.json();
        if (url.type === "name"){
            return {search: data};}
        else{
            return {
                search: url.query, 
                film: data
            };
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
