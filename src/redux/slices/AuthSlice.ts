import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    uid: string,
    email: string,
    status: string,
    photoURL: string,
    userName: string,
    errorMessage: string | null,
}

const initialState: AuthState = {
    uid: "",
    email: "",
    status: "not-authenticated",
    photoURL: "",
    userName: "",
    errorMessage: null,
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<AuthState>) => {
            state.uid = payload.uid;
            state.email = payload.email;
            state.status = "authenticated";
            state.photoURL = payload.photoURL;
            state.userName = payload.userName;
            state.errorMessage = null;
        },
        logout: (state, { payload }: PayloadAction<AuthState>) => {
            state.uid = "";
            state.email = "";
            state.status = "not-authenticated";
            state.photoURL = "";
            state.userName = "";
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.uid = "";
            state.email = "";
            state.status = "checking";
            state.photoURL = "";
            state.userName = "";
            state.errorMessage = null;
        },
    },
})

export const { login, logout, checkingCredentials } = AuthSlice.actions
