import React from 'react';
import TopLevelNavbar from './TopLevelNavbar/TopLevelNavbar';
import NavbarRoute from './NavbarRoute/NavbarRoute';

const Navbar = () => {
    return (
        <div>
            <div className=' hidden lg:flex'>
                <TopLevelNavbar></TopLevelNavbar>
            </div>
            <div>
                <NavbarRoute></NavbarRoute>
            </div>
        </div>
    );
};

export default Navbar;