import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFaceAngry } from '@fortawesome/free-solid-svg-icons';



const ReceiverDetails = () => {
    return (
        <div className=''>
            <div className=" h-96 shadow-2xl mr-4 pt-5 ">
                <div className="w-80 m-auto max-w-sm">

                    <div className=''>
                        <div className="avatar flex justify-center mb-2">
                            <div className="w-16 rounded-full">
                                <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='' />
                            </div>
                        </div>
                        <p className='text-center font-bold'>Saiket Das</p>
                        <p className='text-center opacity-70'>Dhaka, Bangladesh</p>
                    </div >



                    <div className="px-10 pt-10" >

                        <div className='flex justify-between items-center'>
                            <h2 className=" text-gray-800 font-semibold ">Contact Info</h2>
                            <p className='text-sm text-primary'>Add new</p>
                        </div >


                        <div className="divider my-1" ></div >

                        <div className="mt-3" >
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
                                        icon={faFaceAngry}
                                        className='text-gray-400  text-xl'
                                    />
                                </span>
                                <p className='text-center opacity-70'>Dhaka, Bangladesh</p>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default ReceiverDetails;