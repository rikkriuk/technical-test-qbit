import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../../types/Category";

const BASE_URL:string = import.meta.env.VITE_BASE_URL;

export const getCategory = createAsyncThunk("category/getCategory", async (_, thunkAPI) => {
   try {
      const response = await axios.get(`${BASE_URL}/category`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching hero data");
    }
});

const categorySlice = createSlice({
   name: "category",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getCategory.pending, (state) => {
            state.loading = true;
            state.error = "";
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload.category;
         })
         .addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
         });
   },
});

export default categorySlice.reducer;
