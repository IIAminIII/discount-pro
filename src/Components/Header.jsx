import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate('/login');
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'bg-[#8D7B68] text-white font-bold ' : 'hover:text-[#8D7B68] transition duration-300'
                    }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/brands"
                    className={({ isActive }) =>
                        isActive ? 'bg-[#8D7B68] text-white font-bold ' : 'hover:text-[#8D7B68] transition duration-300'
                    }>
                    Brands
                </NavLink>
            </li>
            {user && <li>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? 'bg-[#8D7B68] text-white font-bold ' : 'hover:text-[#8D7B68] transition duration-300'
                    }>
                    My Profile
                </NavLink>
            </li>}
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'bg-[#8D7B68] text-white font-bold ' : 'hover:text-[#8D7B68] transition duration-300'
                    }>
                    About Dev
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-md">
                            {links}
                        </ul>
                    </div>
                    <img
                        className="w-5 h-5 md:w-10 md:h-10"
                        src="https://i.ibb.co/qFJJdKR/icons8-discount-48.png"
                        alt="Discount Pro Logo"
                    />
                    <Link to="/" className="font-bold text-sm md:text-2xl text-[#8D7B68]">
                        Discount Pro
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
                </div>
                <div className="navbar-end md:gap-3 gap-1">
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn bg-[#8D7B68] text-white hover:bg-[#C8B6A6] transition duration-300 p-3">
                            Logout
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `btn btn-ghost ${isActive
                                        ? 'bg-[#F1E7DC] text-[#8D7B68]'
                                        : 'text-[#8D7B68] hover:bg-[#F1E7DC] hover:text-[#8D7B68] transition duration-300'
                                    }`
                                }>
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `btn ${isActive
                                        ? 'bg-[#C8B6A6] text-white'
                                        : 'bg-[#8D7B68] text-white hover:bg-[#C8B6A6] transition duration-300'
                                    }`
                                }>
                                Register
                            </NavLink>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Header;
