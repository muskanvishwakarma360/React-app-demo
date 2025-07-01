import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
    const [sidebarToggle, setSidebarToggle] = useState(true);

    return (
        <div className=' bg-gray-800'>
            <div className='flex'>
                <Sidebar sidebarToggle={sidebarToggle} />
                <div className={`w-full ${sidebarToggle ? '' : 'ml-20 sm:ml-64'}`}>
                    <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                </div>
            </div>


            <div className={`flex-1 transition-all duration-500 bg-gray-200 sm:p-10 ${sidebarToggle ? '' : 'ml-20 sm:ml-64'}`}>
                <Outlet />
            </div>

        </div>


    )
};
