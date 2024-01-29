import Link from 'next/link';
import React from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const NavbarRoute = () => {
    const navlinks =

        <>
            <li><Link href={"/"}>Home</Link></li>
            <li className='flex gap-1 items-center group relative '>Class 5-12 <MdOutlineExpandMore />
                <ul className=' hidden group-hover:flex group-hover:flex-col absolute top-6 px-3 py-2 bg-slate-900 text-white '>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                </ul>

            </li>
            <li className='flex gap-1 items-center group relative'>Skills <MdOutlineExpandMore />
                <ul className=' hidden group-hover:flex group-hover:flex-col absolute top-6 px-6 py-3 bg-slate-900 text-white rounded-md shadow-md'>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                    <li>Hsc</li>
                </ul>
            </li>
            <li><Link href={"/"}>Admission Test</Link></li>
            <li><Link href={"/"}>Job Preparation </Link></li>
            <li><Link href={"/"}>Online Batch</Link></li>
        </>

    return (
        <div>
            <div className=' max-w-5xl mx-auto flex justify-between items-center'>
                <ul className='flex gap-2 font-bold text-lg'>
                    {navlinks}
                </ul>
                <div className='flex items-center'>
                    <FaUser className='mr-1' />
                    <Link href={"/login"} className=' uppercase font-bold text-lg'>Sign In / Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarRoute;