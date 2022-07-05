import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserAlt } from '@fortawesome/fontawesome-free-solid';
import { faGear } from '@fortawesome/free-solid-svg-icons';



const ChatArea = () => {
    return (

        <div className='shadow-2xl m-3 rounded-lg max-h-50'>
            <div className=''>
                <div className='p-4'>


                    <div>
                        <input type="text" placeholder="Search your friedns" className="input w-full max-w-xs bg-gray-100" />
                    </div>

                    <div class="">
                        <div class="drawer-content  ">

                            <ul className=" flex justify-between p-4 ">

                                {/* ------ SINGLE USER CHAT ------ */}
                                <li>
                                    <Link to='/chats'>
                                        <span className='text-2xl'>
                                            <FontAwesomeIcon
                                                icon={faUserAlt}
                                                className='text-gray-400  hover:text-sky-300'
                                            />
                                        </span>
                                    </Link>
                                </li>


                                {/* ------ GROUP CHAT ------ */}
                                <li>
                                    <Link to='/chats/groupchats'>
                                        <span className='text-2xl'>
                                            <FontAwesomeIcon
                                                icon={faUsers}
                                                className='text-gray-400  hover:text-sky-300'
                                            />
                                        </span>
                                    </Link>
                                </li>

                                {/* ------ SEETING OR STORY ------ */}
                                <li>
                                    <Link to='/chats/stroy'>
                                        <span className='text-2xl'>
                                            <FontAwesomeIcon
                                                icon={faGear}
                                                className='text-gray-400  hover:text-sky-300'
                                            />
                                        </span>
                                    </Link>
                                </li>
                            </ul>


                            <Outlet></Outlet>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatArea;