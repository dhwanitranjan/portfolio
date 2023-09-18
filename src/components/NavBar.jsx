import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const NavBar = () => {
    const links = [
        {id:1, title: 'home'},
        {id:2, title: 'portfolio'},
        {id:3, title: 'experience'},
        {id:4, title: 'contact'},
    ]
    const [nav, setNav] = useState(false)
    return (
        <div className='flex justify-between items-center w-full px-4 h-20 text-white bg-black fixed'>
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    Dhwanit
                </h1> 
            </div>
            <div className='hidden md:flex row-auto'>
                <ul className='flex'>
                    {links.map((link, i) => (
                        <li key={i} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-150'>
                            {link.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer text-gray-500 hover:scale-110 hover:text-white pr-4 z-10 duration-150'>
                {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
            </div>
            {nav && (
                <ul className='flex flex-col items-center absolute pt-20 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                    {links.map((link, i) => (
                        <li key={i} className='text-5xl py-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-150'>
                            {link.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar
