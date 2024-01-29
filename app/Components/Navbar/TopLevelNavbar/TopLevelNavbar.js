import Image from 'next/image';
import React from 'react';
import logo from "@/public/Logo.png"
import { LuAlarmClock } from "react-icons/lu";
import { TbMapPinShare } from "react-icons/tb";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const TopLevelNavbar = () => {
    return (
        <div className='w-full'>
            <div className='max-w-5xl mx-auto bg-zinc-950 flex justify-between items-center px-5 py-3'>
                {/* Website logo */}
                <div>
                    <Image src={logo} alt='E-Learning Logo'></Image>
                </div>

                {/* Scheduele info and social links */}
                <div className='flex text-white gap-10'>

                    {/* Schedule */}
                    <div className='flex gap-3'>
                        <LuAlarmClock className='text-5xl ' />
                        <div>
                            <p className='text-[12px]'>Friday-Saturday <span className=' font-semibold text-sm'>Closed</span></p>
                            <p className='text-amber-600 font-bold'>Sun-Thu 8:00 - 22:00</p>
                            <p className='text-[12px]'>Call us</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className='flex gap-10 items-center'>
                        <div className='flex gap-3'>
                        <TbMapPinShare className='text-5xl' />
                        <div>
                            <p className='text-[12px]'>Over</p>
                            <p className='text-amber-600 font-bold'>120,000</p>
                            <p className='text-[12px]'>WorldWide</p>
                        </div>
                        </div>
                        {/* socail links */}
                        <div className='flex text-2xl gap-2'>
                            <RiFacebookLine className='text-lg font-bold' />
                            <FaInstagram className='text-lg' />
                            <FaTwitter className='text-lg' />

                        </div>
                    </div>
                </div>
            </div>

            <hr  className='mt-10 w-full'/>
        </div>
    );
};

export default TopLevelNavbar;