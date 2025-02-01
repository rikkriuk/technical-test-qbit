export interface Category {
   title: string;
   image: string;
}

export interface CategoryState {
   categories: Category[];
   loading: boolean;
   error: string;
}

export const initialState: CategoryState = {
   categories: [],
   loading: false,
   error: "",
};