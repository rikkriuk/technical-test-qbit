export interface Banner {
    email: string;
}

export interface BannerState {
    loading: boolean;
    error: string | null;
    succces: boolean;
}

export const initialState: BannerState = {
    loading: false,
    error: null,
    succces: false,
};
