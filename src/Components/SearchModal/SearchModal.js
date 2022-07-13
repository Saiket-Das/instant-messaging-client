import React from 'react';



const SearchModal = ({ setSearchResult }) => {


    return (
        <div className='mt-5'>


            <div className='flex gap-2'>
                <input
                    type="text" placeholder="Type here"
                    className="input input-sm w-full max-w-xs"
                    onChange={(e) => setSearchResult(e.target.value)} />

                <button className="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>

            {/* <p>{searchResult}</p> */}
        </div >
    );
};

export default SearchModal;