import React from 'react';
import BubbleTab from "@/components/UI/BubbleTab";
import TextXS from "@/components/UI/TextXS";

function EmptyTab() {
    return (
        <div className='flex flex-col items-center gap-[7px]'>
            <div className='w-[60px] h-[60px] rounded-[100%] bg-gray-200'/>

            <div className='w-[52px] h-[13px] bg-gray-200'/>
        </div>
    );
}

export default EmptyTab;