import React from 'react';
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { Home, Login, Payment, Shop, SignUp, BookingFlight } from '@/pages';
import { PATHS } from './path';
import NotFound from '@/pages/NotFound';
import MainLayout from '@/layouts/MainLayout';

function AppRoutes() {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />, // MainLayout sẽ bao bọc tất cả các children
            children: [
                { path: PATHS.home, element: <Home /> },
                { path: '/payment', element: <Payment /> },
                { path: '/shop', element: <Shop /> },
                { path: '/booking-flight', element: <BookingFlight /> },
            ],
        },
        { path: PATHS.login, element: <Login /> },
        { path: PATHS.signup, element: <SignUp /> },
        { path: '/not-found', element: <NotFound /> },
        { path: '*', element: <Navigate to="/not-found" replace /> },
    ]);
    return routing;
}

function Routers() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default Routers;
