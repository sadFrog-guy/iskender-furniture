import React from 'react';
import Heading from "@/components/UI/Heading";
import Margin from "@/components/Tools/Margin";
import SliderArrows from "@/components/UI/SliderArrows";
import SliderPagination from "@/components/UI/SliderPagination";
import WidthLimit from "@/components/Tools/WidthLimit";
import ProductCard from "@/components/UI/ProductCard";

function Auction() {
    const arrayToMap = Array.from({ length: 6 }, (_, index) => index);

    return (
        <WidthLimit className='pb-[21px] relative flex flex-col'>
            <Heading>
                Аукционные товары
            </Heading>

            <Margin direction={'b'} px={18}/>

            <div className='flex gap-[10px]'>
                {arrayToMap.map((item, index) => {
                    return (
                        <ProductCard
                            key={index}
                            src='images/photo.png'
                            alt='Cabin'
                            title='Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..'
                            price={1294}
                            discountPrice={1400}
                            isDiscount={true}
                            isComplect={true}
                        />
                    )
                })}
            </div>

            <SliderArrows/>

            <SliderPagination/>
        </WidthLimit>
    );
}

export default Auction;