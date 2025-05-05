import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-107px)] flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    );
};

export default Loading;