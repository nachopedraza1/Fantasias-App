import { Routes, Route } from "react-router-dom"

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { MainRoutes } from '../main/routes/MainRoutes';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={< AuthRoutes />} />
            <Route path="/*" element={< MainRoutes />} />
        </Routes>
    )
}
