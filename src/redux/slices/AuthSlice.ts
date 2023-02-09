import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '../../interfaces/interfaces';

const initialState: AuthState = {
    uid: "",
    name: "",
    photoURL: "",
    message: null,
    isLoading: false,
    validations: null,
    status: "not-authenticated",
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<AuthState>) => {
            state.uid = payload.uid;
            state.status = "authenticated";
            state.isLoading = false;
            state.name = payload.name;
            state.photoURL = payload.photoURL;
            state.message = null;
            state.validations = null;
        },
        logout: (state, { payload }: PayloadAction<AuthState>) => {
            state.uid = "";
            state.status = "not-authenticated";
            state.isLoading = false;
            state.name = "";
            state.photoURL = "";
            state.message = payload?.message;
            state.validations = payload?.validations;
        },
        checkingCredentials: (state) => {
            state.uid = "";
            state.status = "checking";
            state.isLoading = true;
            state.name = "";
            state.photoURL = "";
            state.message = null;
            state.validations = null;
        },
        clearErrorMessage: (state) => {
            state.message = null;
            state.validations = null;
        }
    },
})

export const { login, logout, checkingCredentials, clearErrorMessage } = AuthSlice.actions;
