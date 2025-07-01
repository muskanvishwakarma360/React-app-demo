import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ sidebarToggle }) {
    const navigate = useNavigate();

    return (
        <div className={`fixed h-full w-20 bg-gray-800 text-white  sm:w-64 px-10 pt-10 transition-transform duration-300  ${sidebarToggle ? ' -translate-x-full' : ' translate-x-0'} `}>
            <div className='h-[80%] '>
                <ul className=' space-y-4 font-serif text-lg'>
                  
                    <li onClick={() => navigate('/dashboard/panel')}>Dashboard</li>
                </ul>
            </div>

        </div>
    )
}
