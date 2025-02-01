import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../types/Data";
import axios from "axios";

const BASE_URL:string = import.meta.env.VITE_BASE_URL;

export const getAllData = createAsyncThunk("data/getAllData", async (_, thunkAPI) => {
   try {
      const response = await axios.get(`${BASE_URL}/data`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching hero data");
    }
});

const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {},
   extraReducers: (builder): void => {
      builder
      .addCase(getAllData.pending, (state) => {
         state.loading = true;
         state.error = "";
      })
      .addCase(getAllData.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload as string;
      });
   }
})

export default dataSlice.reducer;