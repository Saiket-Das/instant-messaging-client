import React from 'react';


const ChatArea = () => {
    return (

        <div className='shadow-2xl m-3 rounded-lg	'>
            <div className=' h-max-screen'>
                <div className='p-4'>


                    <div>
                        <input type="text" placeholder="Search your friedns" class="input w-full max-w-xs bg-gray-100"

                        />
                    </div>

                    <div>

                    </div>

                    <div class="card text-primary-content border mt-3">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>

                            <h2 class="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn">Buy Now</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatArea;