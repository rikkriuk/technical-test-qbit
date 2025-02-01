import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../types/Testimonial";
import axios from "axios";

const BASE_URL:string = import.meta.env.VITE_BASE_URL;

export const getTestimonials = createAsyncThunk(
   "testimonials/getTestimonials",
   async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
     try {
       const response = await axios.get(`${BASE_URL}/testimonials`, {
         params: { page, limit },
       });
       return response.data;
     } catch (error: any) {
       console.error(error);
       return thunkAPI.rejectWithValue(
         error.response?.data || "Error fetching testimonial data"
       );
     }
   }
);

const testimonialSlice = createSlice({
   name: "testimonials",
   initialState,
   reducers: {},
   extraReducers: (builder): void => {
      builder
      .addCase(getTestimonials.pending, (state) => {
         state.loading = true;
         state.error = "";
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
         state.loading = false;
         state.testimonials = action.payload.testimonials;
         state.page = action.payload.page;
         state.totalPages = action.payload.totalPages;
      })
      .addCase(getTestimonials.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload as string;
      });
   }
})

export default testimonialSlice.reducer;