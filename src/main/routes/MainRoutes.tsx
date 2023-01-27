import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages';

export const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={< Navigate to="/" replace={true} />} />
        </Routes>

    )
}
