import React from 'react';
import LogoIcon from "@/components/Icons/LogoIcon";
import Margin from "@/components/Tools/Margin";
import PointerIcon from "@/components/Icons/PointerIcon";

function AddressCardTop() {
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='w-[42px] h-[42px] py-[10.48px] px-[16.84px] bg-[#F1F9FF] rounded-[100%]'>
                    <LogoIcon/>
                </div>

                <Margin direction={'r'} px={10}/>

                <div>
                    <p className='text-xl font-medium'>
                        Iskender home
                    </p>
                    <p className='text-base font-regular text-dark-blue underline'>
                        открыть в карте
                    </p>
                </div>
            </div>

            <PointerIcon className='flex self-end'/>
        </div>
    );
}

export default AddressCardTop;