import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FormReview } from '../../interfaces/interfaces';


const reviews: FormReview[] = [];

export const ReviewSlice = createSlice({
    name: 'Reviews',
    initialState: {
        reviews
    },
    reducers: {
        setReview: (state, { payload }: PayloadAction<FormReview>) => {
            state.reviews.push(payload)
        }
    },
})

export const { setReview } = ReviewSlice.actions
