import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const ReceiverDetails = () => {
    return (
        <div>
            <div class="h-screen shadow-2xl mr-4">
                <div class="w-80 m-auto max-w-sm">

                    <div className=''>
                        <div class="avatar flex justify-center mb-2">
                            <div class="w-16 rounded-full">
                                <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='' />
                            </div>
                        </div>
                        <p className='text-center font-bold'>Saiket Das</p>
                        <p className='text-center opacity-70'>Dhaka, Bangladesh</p>
                    </div>



                    <div class="px-10 pt-10">

                        <div className='flex justify-between items-center'>
                            <h2 class=" text-gray-800 font-semibold ">Contact Info</h2>
                            <p className='text-sm text-primary'>Add new</p>
                        </div>


                        <div class="divider my-1"></div>

                        <div class="mt-3">
                            <div className="flex items-center gap-5">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className='text-gray-400  text-xl'
                                    />
                                </span>
                                <p className='text-center opacity-70'>ahanbryan@gmail.com</p>
                            </div>


                            <div className="flex items-center gap-5 mt-5">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className='text-gray-400  text-xl'
                                    />
                                </span>
                                <p className='text-center opacity-70'>+601234567889</p>
                            </div>

                            <div className="flex items-center gap-5 mt-5">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className='text-gray-400  text-xl'
                                    />
                                </span>
                                <p className='text-center opacity-70'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiverDetails;