import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import MainLayout from '../layout/MainLayout';
import Appointment from '../pages/Appointment/Appointment/Appointment';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },

]);