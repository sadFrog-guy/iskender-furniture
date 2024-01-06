import React from 'react';
import Heading from "@/components/UI/Heading";
import Margin from "@/components/Tools/Margin";
import AddressCard from "@/components/UI/AddressCard";
import SliderPagination from "@/components/UI/SliderPagination";
import WidthLimit from "@/components/Tools/WidthLimit";

function Address() {
    return (
        <WidthLimit className='pb-[35px] relative flex flex-col'>
            <Heading>
                Адреса магазинов
            </Heading>

            <Margin direction={'b'} px={18}/>

            <div className='flex gap-[10px]'>
                <AddressCard/>
                <AddressCard/>
                <AddressCard/>
            </div>

            <SliderPagination/>
        </WidthLimit>
    );
}

export default Address;