import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../Home/Home';
import Login from '../../Login/Login';
import About from '../../About/About';
import Appointment from '../../Appointment/Appointment';
import Review from '../../Review/Review';
import Contact from '../../Contact/Contact';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/about',
                element:<About></About>
                
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
    
])
export default router;