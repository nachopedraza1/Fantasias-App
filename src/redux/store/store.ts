import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice, ReviewSlice } from '../slices'

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        Reviews: ReviewSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch