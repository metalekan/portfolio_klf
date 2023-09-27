import React, { useState } from 'react';
import Fliers from './Fliers';
import Logo from './Logo';
import BookCover from './BookCover'
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="min-h-[50vh] flex flex-col items-center">
            <div className='w-full md:w-[40%] mb-8 flex justify-around align-middle rounded-lg'>
                <button
                    className={`w-full text-base p-1 md:p-2 text-center m-2 ${activeTab === 1 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(1)}
                >
                    Fliers
                </button>
                <button
                    className={`w-full text-base p-1 md:p-2 text-center m-2 ${activeTab === 2 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(2)}
                >
                    Logo
                </button>
                <button
                    className={`w-full text-base p-1 md:p-2 text-center m-2 ${activeTab === 3 ? 'bg-cyan text-white' : 'bg-white text-cyan' }  border-0 cursor-pointer rounded capitalize font-semibold duration-300`}
                    onClick={() => handleTabClick(3)}
                >
                    Book Covers
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && <Fliers />}
                {activeTab === 2 && <Logo/>}
                {activeTab === 3 && <BookCover />}
            </div>
        </div>
    );
};

export default Tabs;
