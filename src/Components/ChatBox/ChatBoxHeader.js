import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faCircle } from '@fortawesome/free-solid-svg-icons';


const ChatBoxHeader = () => {
    return (
        <div className="flex justify-between items-center shadow-xl rounded-lg p-5">

            <div className='flex align-middle gap-5'>
                <div>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-sky-300 ring-offset-2 ring-offset-1">
                            <img src="https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='' />
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-sm font-semibold'>Ahan Bryan</p>
                    <span className='text-xs opacity-70 text-green-500 text-semibold'>Online</span>
                </div>
            </div>


            <div className="">
                <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className='text-gray-400  text-2xl'
                />
            </div>
        </div>
    );
};

export default ChatBoxHeader;