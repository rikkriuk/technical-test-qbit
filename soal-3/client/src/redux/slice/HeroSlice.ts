import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../types/Hero";
import axios from "axios";

const BASE_URL:string = import.meta.env.VITE_BASE_URL;

export const getHeroData = createAsyncThunk("header/getHeroData", async (_, thunkAPI) => {
   try {
     const response = await axios.get(`${BASE_URL}/header`);
     return response.data;
   } catch (error: any) {
     console.error(error);
     return thunkAPI.rejectWithValue(error.response?.data || "Error fetching hero data");
   }
});

const heroSlice = createSlice({
   name: "hero",
   initialState,
   reducers: {},
   extraReducers: (builder): void => {
      builder
      .addCase(getHeroData.pending, (state) => {
         state.loading = true;
         state.error = "";
      })
      .addCase(getHeroData.fulfilled, (state, action) => {
         state.loading = false;
         state.hero = action.payload;
      })
      .addCase(getHeroData.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload as string;
      });
   }
})

export default heroSlice.reducer;