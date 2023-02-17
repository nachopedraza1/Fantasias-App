import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MainRoutes } from '../main/routes/MainRoutes';

import { useCustomDispatch, useCustomSelector } from '../hooks/useRedux';
import { checkToken } from '../redux/thunks/auth';

export const AppRouter: React.FC = () => {

    const dispatch = useCustomDispatch();

    const { status } = useCustomSelector(state => state.auth);

    useEffect(() => {
        dispatch(checkToken());
    }, [])


    return (
        <Routes>
            <Route path="/auth/*" element={< AuthRoutes />} />
            <Route path="/*" element={< MainRoutes />} />
        </Routes>
    )
}
