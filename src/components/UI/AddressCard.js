import React from 'react';
import LogoIcon from "@/components/Icons/LogoIcon";
import Margin from "@/components/Tools/Margin";
import PointerIcon from "@/components/Icons/PointerIcon";
import AddressCardTop from "@/components/UI/AddressCardTop";
import TextBaseRegular from "@/components/UI/TextBaseRegular";
import LocationIcon from "@/components/Icons/LocationIcon";
import AddressWrap from "@/components/UI/AddressWrap";
import ClockIcon from "@/components/Icons/ClockIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import AddressCardBottom from "@/components/UI/AddressCardBottom";

function AddressCard() {
    return (
        <div className='bg-white w-[408px] h-[179px] rounded-[10px] p-[15px]'>
            <AddressCardTop/>

            <div className='bg-[#E3E3E3] mt-[13px] mb-[21px] h-[1px]'/>

            <AddressCardBottom/>
        </div>
    );
}

export default AddressCard;