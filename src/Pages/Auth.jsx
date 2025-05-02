import React from 'react';
import Login from './Login';
import Register from './Register';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div>
            <header className='my-5'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
           
        </div>
    );
};

export default Auth;