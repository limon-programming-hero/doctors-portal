import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const style = 'hover:btn-accent hover:rounded-xl hover:text-white';
    const commonNav = <>
        <li className={style}> <Link to="/"  >Home</Link></li>
        <li className={style}> <Link to="/"  >About</Link></li>
        <li className={style}> <Link to="/appointment"  >Appointment</Link></li>
        <li className={style}> <Link to="/"  >Reviews</Link></li>
        <li className={style}> <Link to="/"  >Contact Us</Link></li>
        <li className={style}> <Link to="/"  >Login</Link></li>
    </>
    return (
        <div className='mt-2 mx-auto max-w-[1440px]'>
            <div className="navbar ">
                <div className="navbar-start flex justify-between">
                    <div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {commonNav}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {commonNav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;