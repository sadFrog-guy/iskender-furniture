import React from 'react';

function SliderPagination() {
    return (
        <div className='flex justify-center gap-[5px] mt-[26px] cursor-pointer'>
            <div className='w-[3px] h-[3px] rounded-[30px] bg-dark-blue'/>
            <div className='w-[33px] h-[3px] rounded-[30px] bg-dark-blue'/>
            <div className='w-[3px] h-[3px] rounded-[30px] bg-dark-blue'/>
        </div>
    );
}

export default SliderPagination;