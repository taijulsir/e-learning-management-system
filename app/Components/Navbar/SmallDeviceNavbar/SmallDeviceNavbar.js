import React from 'react';
import logo from "@/public/smalldevice log.png"
import Image from 'next/image';
import SmallDeviceNavRoute from '../SmallDeviceNavRoute/SmallDeviceNavRoute';



const SmallDeviceNavbar = () => {
    return (
        <div>
            <div className=' bg-[#f0f0f0] shadow flex justify-between container mx-auto z-10 px-5 py-4 items-center'>
                <div>
                    <Image src={logo} alt='E-learning management logo'></Image>
                </div>
                <div>
                    <SmallDeviceNavRoute></SmallDeviceNavRoute>
                </div>
            </div>
        </div>
    );
};

export default SmallDeviceNavbar;