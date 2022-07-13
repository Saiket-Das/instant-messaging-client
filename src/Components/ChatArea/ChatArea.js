import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserAlt } from '@fortawesome/fontawesome-free-solid';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SearchModal from '../SearchModal/SearchModal';
import { ChatState } from '../../Context/ChatProvider';



const ChatArea = () => {
    const [searchResults, setSearchResults] = useState([])

    const { user, setSelectedChat, notification, setNotification } = ChatState();
    return (

        <div className='shadow-2xl m-3 rounded-lg '>
            <div className=''>
                <div className='p-4'>


                    <div className=''>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn bg-gray-100 btn-ghost modal-button w-72">Search your friends</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow rounded-box w-full bg-gray-100 mt-2 h-64">
                                <SearchModal
                                    setSearchResults={setSearchResults}
                                    user={user}>
                                </SearchModal>


                                {
                                    searchResults.map(result =>
                                        <div key={result._id}>
                                            <span className="inline-flex items-center m-2 px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600">
                                                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                                                <span className="ml-1">
                                                    {result.name}
                                                </span>
                                            </span>
                                        </div>
                                    )}
                            </ul>
                        </div>


                    </div>



                    <div className="">
                        <div className="drawer-content  ">

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
        </div >
    );
};

export default ChatArea;