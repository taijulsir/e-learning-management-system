import React from 'react';
import TopLevelNavbar from './TopLevelNavbar/TopLevelNavbar';
import NavbarRoute from './NavbarRoute/NavbarRoute';

const Navbar = () => {
    return (
        <div>
            <div>
                <TopLevelNavbar></TopLevelNavbar>
            </div>
            <div>
                <NavbarRoute></NavbarRoute>
            </div>
        </div>
    );
};

export default Navbar;