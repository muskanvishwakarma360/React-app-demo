import React from 'react'
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar({ sidebarToggle, setSidebarToggle }) {
    return (
        <div className={`bg-blue-800 text-white h-[60px] flex justify-between px-10 py-4    `}>
            <div className='w-[50%] flex gap-5'>
                <img src='https://assets.codepen.io/1750909/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1532167144&width=256' className='h-[30px] w-[30px]' />
               <FiAlignJustify  onClick={()=>setSidebarToggle(!sidebarToggle)}  className='h-[30px] w-[30px]'/>
                <h1 className='text-lg'> Dashboard </h1>
            </div>


            <div className='w-[40%]'>
                <ul className='flex justify-around  font-serif text-lg '>
                    <li>Home </li>
                    <li>Profile</li>
                    <li>Chart </li>
                    <li>About</li>
                </ul>
            </div>

        </div>
    )
}




