import React from 'react';
import ChatArea from '../../../../Components/ChatArea/ChatArea';
import Header from '../Header/Header';

const Chats = () => {
    return (
        <div>
            <Header></Header>

            {/* CHAT RELATED  */}
            <div className='grid grid-cols-4'>

                <div className=''>
                    <ChatArea></ChatArea>
                </div>


                <div className='border col-span-2'>
                    <h2>omammasdfgfdd</h2>
                </div>


                <div className='border'>
                    <h2>omammasdfgfdd</h2>
                </div>

            </div>
        </div>
    );
};

export default Chats;