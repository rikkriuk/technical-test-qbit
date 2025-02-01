import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../../types/Product";

const BASE_URL:string = import.meta.env.VITE_BASE_URL;

export const getProducts = createAsyncThunk(
   "products/getProducts",
   async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
     try {
       const response = await axios.get(`${BASE_URL}/products`, {
         params: { page, limit },
       });
       return response.data;
     } catch (error: any) {
       console.error(error);
       return thunkAPI.rejectWithValue(
         error.response?.data || "Error fetching product data"
       );
     }
   }
);

const productSlice = createSlice({
   name: "products",
   initialState,
   reducers: {},
   extraReducers: (builder): void => {
      builder
      .addCase(getProducts.pending, (state) => {
         state.loading = true;
         state.error = "";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
         state.loading = false;
         state.product = action.payload.products;
         state.page = action.payload.page;
         state.totalPages = action.payload.totalPages;
      })
      .addCase(getProducts.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload as string;
      });
   }
})

export default productSlice.reducer;