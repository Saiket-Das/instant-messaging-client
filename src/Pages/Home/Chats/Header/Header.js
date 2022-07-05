import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../Assets/logo.jpg'


const Header = () => {
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
                                    className='text-gray-400 hover:text-white'
                                />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>

                        {/* <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Notification Bell Icon" />
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