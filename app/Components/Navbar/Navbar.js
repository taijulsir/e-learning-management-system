import React from 'react';
import LgTopLevelNavbar from './LgTopLevelNavbar/LgTopLevelNavbar';
import LgNavbarRoute from './LgNavbarRoute/LgNavbarRoute';
import SmallDeviceNavbar from './SmallDeviceNavbar/SmallDeviceNavbar';

const Navbar = () => {
    return (
        <div>
            {/* For large screen */}
            <div className='hidden lg:flex lg:flex-col'>
                <div>
                    <LgTopLevelNavbar></LgTopLevelNavbar>
                </div>
                <div>
                    <LgNavbarRoute></LgNavbarRoute>
                </div>
            </div>

            {/* For Mobile Device */}
            <div className=' lg:hidden'>
                <div>
                    <SmallDeviceNavbar></SmallDeviceNavbar>
                </div>
            </div>
        </div>
    );
};

export default Navbar;