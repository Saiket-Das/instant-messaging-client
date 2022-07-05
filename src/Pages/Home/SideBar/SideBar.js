import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faUser, faStar, faCalendarCheck } from '@fortawesome/fontawesome-free-solid';



const SideBar = () => {
    return (
        <div className='mx-auto'>
            <div className=' flex flex-col max-h-screen gap-10 mt-8 '>



                <span className='text-3xl text-center p-2 rounded-xl hover:bg-sky-200' >
                    <FontAwesomeIcon
                        icon={faMessage}
                        className='text-gray-400 hover:text-white'
                    />
                </span>


                <span className='text-3xl text-center p-3 rounded-xl hover:bg-sky-200'>
                    <FontAwesomeIcon
                        icon={faUser}
                        className='text-gray-400 hover:text-white' />
                </span>

                <span className='text-3xl text-center p-3 rounded-xl hover:bg-sky-200'>
                    <FontAwesomeIcon
                        icon={faStar}
                        className='text-gray-400 hover:text-white'
                    />
                </span>

                <span className='text-3xl text-center p-3 rounded-xl hover:bg-sky-200'>
                    <FontAwesomeIcon
                        icon={faCalendarCheck}
                        className='text-gray-400 hover:text-white' />
                </span>
            </div>



        </div>
    );
};

export default SideBar;