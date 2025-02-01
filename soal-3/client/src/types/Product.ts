export interface Product {
   id: number;
   title: string;
   image: string;
   price: number;
   price_after_discount: number | null
}

export interface ProductState {
   product: Product[],
   page: number | null,
   totalPages: number | null,
   loading: boolean,
   error: string,
}

export const initialState: ProductState = {
   product: [],
   page: null,
   totalPages: null,
   loading: false,
   error: "",
}