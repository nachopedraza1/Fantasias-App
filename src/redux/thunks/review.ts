import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/store';

import { FormReview } from '../../interfaces/interfaces';


export const postReview = ({ comment, stars }: FormReview): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {

    }
}