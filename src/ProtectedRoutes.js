import React from 'react';
import { Header } from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    return (
        <div>
            <Header />
            <Outlet />            
        </div>
    )
}
