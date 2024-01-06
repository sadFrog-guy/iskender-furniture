import React from 'react';
import Heading from "@/components/UI/Heading";
import Margin from "@/components/Tools/Margin";
import SaleCard from "@/components/UI/SaleCard";
import EmptySaleCard from "@/components/UI/EmptySaleCard";
import SliderArrows from "@/components/UI/SliderArrows";
import SliderPagination from "@/components/UI/SliderPagination";
import WidthLimit from "@/components/Tools/WidthLimit";

function Sale() {
    return (
        <WidthLimit className='pb-[21px] relative flex flex-col'>
            <Heading>
                Новости
            </Heading>

            <Margin direction={'b'} px={18}/>

            <div className='flex gap-[17px]'>
                <SaleCard
                    title='На кухонную мебель'
                    sale='-50%'
                    button='Подробнее'
                />

                <SaleCard
                    title='На кухонную мебель'
                    sale='-50%'
                    button='Подробнее'
                />

                <EmptySaleCard/>
            </div>

            <SliderArrows/>

            <SliderPagination/>
        </WidthLimit>
    );
}

export default Sale;