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