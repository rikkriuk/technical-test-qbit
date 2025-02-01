import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../../types/Banner";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const postEmail = createAsyncThunk("banner/postEmail", async (email: string, thunkAPI) => {
   try {
        await axios.post(`${BASE_URL}/subscribe`, { email });
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
      resetSuccess: (state) => {
         state.succces = false;
       },
    },
    extraReducers: (builder) => {
      builder
         .addCase(postEmail.pending, (state) => {
               state.loading = true;
               state.error = null;
               state.succces = false;
         })
         .addCase(postEmail.fulfilled, (state) => {
               state.loading = false;
               state.succces = true;
         })
         .addCase(postEmail.rejected, (state, action) => {
               state.loading = false;
               state.error = action.payload as string;
         });
    },
});

export const { resetSuccess } = bannerSlice.actions;
export default bannerSlice.reducer;