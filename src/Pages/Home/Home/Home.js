import React from 'react';
import Chats from '../Chats/Chats/Chats';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <SideBar></SideBar>


                <div className='col-span-11  '>
                    <Chats></Chats>
                </div>
            </div>


        </div>
    );
};

export default Home;