import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
           <div className='mx-5 lg:mx-20 mt-5'>
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;