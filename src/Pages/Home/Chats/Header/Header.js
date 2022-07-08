import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../Assets/logo.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    // console.log(user.displayName)
    console.log(user);

    return (
        <div>
            <div className="navbar bg-base-100 mx-auto px-10">
                <div className="flex-1">
                    <Link to='' className="w-24 p-5">
                        <img src={logo} alt="" />
                    </Link>
                    <span className='text-2xl'>Messaging</span>
                </div>


                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle mr-4">
                            <div className="indicator">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    className='text-gray-400 hover:text-white text-xl'
                                />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>

                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-80 bg-base-100 shadow">
                            <div className="shadow" role="alert">
                                <div className="flex">
                                    <div className="bg-blue-500 w-16 text-center p-2">
                                        <div className="flex justify-center h-full items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    // strokeLinecap-linejoin="round"
                                                    // ="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-white border-r-4 border-blue-400 w-full p-4">
                                        <div>
                                            <p className="text-gray-600 font-bold">New Message</p>
                                            <p className="text-gray-600 text-sm">Your message has been send to Jack</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt='' />
                            </div>
                        </label>

                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='' className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </Link>
                            </li>
                            <li><Link to=''>Settings</Link></li>
                            <li><Link to=''>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;