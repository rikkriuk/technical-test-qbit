export interface Data {
   experience: string;
   country: string;
   sold: string;
   variant: string;
}

export const objectData: Data = {
   experience: "",
   country: "",
   sold: "",
   variant: "",
};


export interface DataState {
   data: Data | null;
   loading: boolean;
   error: string | null;
}

export const initialState: DataState = {
   data: objectData,
   loading: false,
   error: "",
}