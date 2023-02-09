import { SetStateAction } from 'react';

export interface Children {
    children: JSX.Element | JSX.Element[];
}

export interface ModalState {
    openModal: boolean;
    handleClose: (value: SetStateAction<boolean>) => void;
    handleOpen?: (value: SetStateAction<boolean>) => void;
}

export interface FormReview {
    comment: string;
    stars: number | null;
}

export interface LoginData {
    email: string,
    password: string
}

export interface RegisterData extends LoginData {
    name: string,
}

export interface AuthState {
    uid: string,
    status: string,
    photoURL: string,
    name: string,
    isLoading: boolean,
    message: string | null,
    validations: FormValidation | null,
}

export interface DataResponse extends AuthState {
    ok: boolean;
    token: string;
}

export interface FormValidation {
    name?: Error;
    email?: Error;
    password?: Error;
}

export interface Error {
    value?: string;
    msg?: string;
    param?: string;
    location?: string;
}