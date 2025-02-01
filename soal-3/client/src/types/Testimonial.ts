export interface Testimonial {
   id: number;
   name: string;
   message: string;
   title: string;
   image: string;
}

export interface TestimonialState {
   testimonials: Testimonial[];
   page: number;
   totalPages: number;
   loading: boolean;
   error: string;
}

export const initialState: TestimonialState = {
   testimonials: [],
   page: 1,
   totalPages: 1,
   loading: false,
   error: "",
};