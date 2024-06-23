import { Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import SignIn from './components/auth/SignIn';
import axiosV1 from './utils/axiosV1';
import SignUp from './components/auth/SignUp';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import PageNotFound from './components/error-pages/PageNotFound';
import Home from './components/landing-page/Home';
import AdminDashboard from './components/admin-dashboard/AdminDashboard';
import ActiveUsers from './components/admin-dashboard/ActiveUsers';
import InactiveUsers from './components/admin-dashboard/InactiveUsers';
import TransactionHistory from './components/admin-dashboard/TransactionHistory';
import Dashboard from './components/dasboard/Dashboard';
import Profile from './components/dasboard/Profile';
import BankStatement from './components/dasboard/BankStatement';
import AboutUs from './components/landing-page/AboutUs';
import ContactUs from './components/landing-page/ContactUs';
import TermsAndConditions from './components/landing-page/TermsAndConditions';
import PrivacyPolicy from './components/landing-page/PrivacyPolicy';

if (localStorage.getItem('token')) {
    axiosV1.defaults.headers.common.Authorization = localStorage.getItem('token');
} else {
    delete axiosV1.defaults.headers.common.Authorization;
}

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        axiosV1.interceptors.response.use((response) => response, (error) => {
            if (error?.response?.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized! Please sign in to access this page.',
                    showConfirmButton: false,
                    timer: 3000,
                });
                delete axiosV1.defaults.headers.common.Authorization;
                localStorage.clear();
                navigate('/sign-in');
            }

            return Promise.reject(error);
        });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard />} />} />
            <Route path="/profile" element={<ProtectedRoute component={<Profile />} />} />
            <Route path="/bank-statement" element={<ProtectedRoute component={<BankStatement />} />} />
            <Route path="/admin-dashboard" element={<ProtectedRoute component={<AdminDashboard />} />} />
            <Route path="/active-users" element={<ProtectedRoute component={<ActiveUsers />} />} />
            <Route path="/inactive-users" element={<ProtectedRoute component={<InactiveUsers />} />} />
            <Route path="/transaction-history" element={<ProtectedRoute component={<TransactionHistory />} />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
