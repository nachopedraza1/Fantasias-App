import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../../ui/NavBar';
import { TimeOpen } from '../components';
import { HomePage, AboutUs, ContactUs } from '../pages';

export const MainRoutes: React.FC = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/*" element={< Navigate to="/" replace={true} />} />
            </Routes>
            <TimeOpen />
        </>
    )
}
