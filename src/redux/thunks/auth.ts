import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { RootState } from '../store/store';
import { checkingCredentials, clearErrorMessage, login, logout } from '../slices';

import fantApi from '../../api/fantApi';
import { AxiosResponse, AxiosError } from 'axios';

import { LoginData, RegisterData, DataResponse } from '../../interfaces/interfaces';

export const startLogin = ({ email, password }: LoginData): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        await fantApi.post("/auth/login", { email, password })
            .then(({ data }: AxiosResponse<DataResponse>) => {
                localStorage.setItem("token", data.token);
                dispatch(login(data));
            })
            .catch(({ response }: AxiosError<any>) => {
                dispatch(logout(response?.data));
            });
    }
}

export const startRegister = ({ name, email, password, confirmPassword }: RegisterData): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        await fantApi.post("/auth/register", { name, email, password, confirmPassword })
            .then(({ data }: AxiosResponse<DataResponse>) => {
                localStorage.setItem("token", data.token);
                dispatch(login(data));
            })
            .catch(({ response }: AxiosError<any>) => {
                dispatch(logout(response?.data));
            });
    }
}

export const checkToken = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {

        const token = localStorage.getItem("token");

        await fantApi.get("/auth/renew")
            .then(({ data }: AxiosResponse<DataResponse>) => {
                if (!token) return dispatch(logout(data));
                localStorage.setItem("token", data.token)
                dispatch(login(data))
            })
            .catch(({ response }: AxiosError<any>) => {
                dispatch(logout(response?.data));
                dispatch(clearErrorMessage());
            });
    }
}




