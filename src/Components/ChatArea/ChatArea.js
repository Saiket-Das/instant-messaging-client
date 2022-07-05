import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserAlt } from '@fortawesome/fontawesome-free-solid';
import { faGear } from '@fortawesome/free-solid-svg-icons';



const ChatArea = () => {
    return (

        <div className='shadow-2xl m-3 rounded-lg	'>
            <div className=' h-max-screen'>
                <div className='p-4'>


                    <div>
                        <input type="text" placeholder="Search your friedns" className="input w-full max-w-xs bg-gray-100"

                        />
                    </div>
                    <ul className="flex justify-between p-4 ">
                        {/* <!-- Sidebar content here --> */}
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

                    <div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatArea;