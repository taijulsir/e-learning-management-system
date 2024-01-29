"use client"


import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdOutlineExpandMore } from 'react-icons/md';


const SmallDeviceNavRoute = () => {
    const [route, setRoute] = useState(false)
    // nav routes
    const navlinks =
        <>
            <li className='w-full my-4'>
                <Link href={"/"}>Home</Link>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'> </div>
            </li>
            <li className=' my-4  group relative w-full '>
                <div className=' flex gap-1 items-center justify-between'>
                    Classes <MdOutlineExpandMore />
                </div>
                <ul className=' hidden group-hover:flex w-full group-hover:flex-col absolute top-6 px-3 py-2 bg-slate-900 text-white rounded-md shadow-md'>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                </ul>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'></div>
            </li>
            <li className=' my-4 group relative w-full '>
                <div className=' flex gap-1 items-center justify-between '>
                    Skills <MdOutlineExpandMore />
                </div>
                <ul className=' hidden group-hover:flex group-hover:flex-col w-full absolute top-6 px-6 py-3 bg-slate-900 text-white rounded-md shadow-md'>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                    <li className='w-full'>Hsc</li>
                </ul>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'></div>
            </li>
            <li className='w-full my-4'>
                <Link href={"/"} className='w-full'>Admission Test</Link>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'></div>
            </li>
            <li className='w-full my-4'>
                <Link href={"/"} className='w-full'>Job Preparation </Link>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'> </div>
            </li>
            <li className='w-full my-4'>
                <Link href={"/"} className='w-full'>Online Batch</Link>
                <div className='border-b my-3 border-dotted border-[#666666] contents-[""]'> </div>
            </li>
        </>
    return (
        <div>
            <div>
                <button onClick={() => setRoute(!route)}> <IoMenu className=' text-2xl relative text-amber-600'></IoMenu></button>
            </div>
            <div>
                {
                    route &&
                    <div>
                        <ul className=' w-full absolute right-0 mt-5 px-5 text-[#666666] font-bold text-lg'>
                            {navlinks}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default SmallDeviceNavRoute;