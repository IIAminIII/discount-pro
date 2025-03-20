import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto font-poppins'>
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    );
};

export default Root;