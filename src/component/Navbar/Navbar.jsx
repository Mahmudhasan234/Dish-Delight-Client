import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user,signOutUser,updateUserProfile } = useContext(AuthContext)
    console.log(user)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
const handleSignOut = ()=>{
    signOutUser()
    .then()
    .catch(error=>{console.log(error.message)})
}
    return (
        <div>
            {/* parent div */}
            <div className='flex justify-between mb-5'>
                {/* logo section */}
                <div> <h1 className='font-bold lg:text-4xl text-xl text-gray-600 '>Dish<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] '>Delight</span></h1> </div>
                {/* navlink section */}

                <div className='font-semibold lg:text-lg hidden lg:inline '>
                    <ul className='lg:flex  lg:space-x-8'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/blogs'>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/aboutus'>
                                About Us
                            </NavLink>
                        </li>
                        {
                            user ? <li>
                                <div className="dropdown">
                                    <label tabIndex={0}><FaUserCircle className='w-6 h-6'></FaUserCircle></label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box gap-5">
                                        <li>{user?.email}</li>
                                        <li><button onClick={handleSignOut}>Log Out</button></li>
                                    </ul>
                                </div>
                            </li> : <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/login'>
                                Sign In
                            </NavLink>
                        }
                        
                    </ul>
                </div>

                {/* mobile navbar */}

                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <GiHamburgerMenu className='w-5' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <h1 className='font-bold lg:text-4xl text-xl text-gray-600 '>Dish<span className='text-transparent bg-clip-text bg-gradient-to-r  from-[#f12711] to-[#f5af19] '>Delight</span></h1>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <HiX className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/'>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/blogs'>
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/aboutus'>
                                                About Us
                                            </NavLink>
                                        </li>
                                        
                                        {
                            user ? <li>
                                <div className="dropdown">
                                    <label tabIndex={0}><FaUserCircle className='w-6 h-6'></FaUserCircle></label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box gap-5">
                                        <li>{user?.email}</li>
                                        <li><button onClick={handleSignOut}>Log Out</button></li>
                                    </ul>
                                </div>
                            </li> : <div>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : 'text-black'} to='/login'>
                                Sign In
                            </NavLink>
                            </div>
                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Navbar;