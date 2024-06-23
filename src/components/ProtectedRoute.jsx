import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosV1 from '../utils/axiosV1';
import AppLayout from './layout/AppLayout';

function ProtectedRoute({ component }) {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [token] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (token === null || token === '' || token !== axiosV1.defaults.headers.common.Authorization) {
            delete axiosV1.defaults.headers.common.Authorization;
            localStorage.clear();
            navigate('/sign-in');
        }

        if ((user?.role === 'ROLE_USER' && !['/dashboard', '/profile', '/bank-statement'].includes(pathname)) || (user?.role === 'ROLE_ADMIN' && !['/admin-dashboard', '/active-users', '/inactive-users', '/transaction-history'].includes(pathname))) {
            navigate('/page-not-found');
        }
    });

    return (
        token && (
            <AppLayout component={component} />
        )
    );
}

export default ProtectedRoute;
