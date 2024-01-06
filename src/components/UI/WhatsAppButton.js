import React from 'react';
import Image from "next/image";

function WhatsAppButton() {
    return (
        <button className='flex items-center gap-[13px] rounded-[100px] bg-white pt-[7px] pr-[12px] pb-[5px] pl-[14px]'>
            <Image src='/icons/whatsapp.svg' alt='WhatsApp' width={17} height={17}/>

            <p className='font-semibold text-base text-whatsapp'>
                WhatsApp
            </p>
        </button>
    );
}

export default WhatsAppButton;