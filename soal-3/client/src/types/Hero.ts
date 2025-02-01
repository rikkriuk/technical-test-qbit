export interface HeroState {
   hero: object;
   loading: boolean;
   error: string;
}

export const initialState: HeroState = {
   hero: {},
   loading: false,
   error: "",
};

export interface HeroData {
   banner: string;
   title: string;
   description: string;
}

export interface Hero {
   hero: HeroData;
   loading: boolean;
   error: string;
}
