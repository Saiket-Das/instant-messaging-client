import React from 'react';
import ChatArea from '../../../../Components/ChatArea/ChatArea';
import ChatBox from '../../../../Components/ChatBox/ChatBox';
import ReceiverDetails from '../../../../Components/ReceiverDetails/ReceiverDetails';
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


                <div className=' col-span-2'>
                    <ChatBox></ChatBox>
                </div>


                <div className=''>
                    <ReceiverDetails></ReceiverDetails>
                </div>

            </div>
        </div>
    );
};

export default Chats;