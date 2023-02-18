import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../pages';
import { Preloader } from '../../ui/components/Preloader';

export const AuthRoutes: React.FC = () => {

    return (
        <>
            <Preloader />
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="/*" element={<Navigate to="login" replace={true} />} />
            </Routes>
        </>

    )
}