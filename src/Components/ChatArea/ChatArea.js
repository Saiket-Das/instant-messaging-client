import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserAlt } from '@fortawesome/fontawesome-free-solid';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import SearchModal from '../SearchModal/SearchModal';
import { ChatState } from '../../Context/ChatProvider';
import { toast } from 'react-toastify';
import axios from 'axios';




const ChatArea = () => {
    const [searchResults, setSearchResults] = useState([])
    const { user, setSelectedChat, notification, setNotification } = ChatState();

    const accessChat = async (userId) => {
        try {
            const config = {
                headers: {
                    "Content-type": 'application/json',
                    Authorization: `Bearer ${user.jwt}`,
                },
            };

            const { data } = await axios.post('http://localhost:5000/api/chat', { userId }, config);
            setSelectedChat(data);
            console.log(data)
        }

        catch (error) {
            toast.success('Failed to fetch the chat!');

        }
    }



    return (

        <div className='shadow-2xl m-3 rounded-lg' style={{ height: '82vh' }}>
            <div className=''>
                <div className='p-4'>

                    {/* SEARCH YOU FRIENDS  */}
                    <div className=''>
                        <div className="dropdown mx-auto">
                            <label tabIndex="0" className="btn bg-gray-100 btn-ghost modal-button font-normal" style={{ width: '294px' }}>Search your friends</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow rounded-box w-full bg-gray-100 mt-2 h-fit">
                                <SearchModal
                                    setSearchResults={setSearchResults}
                                    user={user}>
                                </SearchModal>


                                {
                                    searchResults.map(searchResult =>
                                        <div key={searchResult._id}>
                                            <div className="max-w-2xl mx-auto mt-4 ">
                                                <div className="relative group">
                                                    <div className="relative px-7 py-2 hover:bg-sky-300 hover:text-white bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

                                                        <div className='flex justify-between items-center gap-4'
                                                            onClick={() => accessChat(searchResult._id)}
                                                        >
                                                            <div className="avatar">
                                                                <div className="w-10 rounded-xl">
                                                                    <img src={searchResult.photo} alt='' />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2 ">
                                                                <p className="">{searchResult.name} </p>
                                                                <p>{searchResult.email}</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
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