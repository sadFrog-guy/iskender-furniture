import React from 'react';
import BubbleIconA from "@/components/Icons/BubbleIconA";
import BubbleIconB from "@/components/Icons/BubbleIconB";
import SaleIcon from "@/components/Icons/SaleIcon";
import TextBaseMedium from "@/components/UI/TextBaseMedium";
import Margin from "@/components/Tools/Margin";
import ButtonB from "@/components/UI/ButtonB";

function SaleCard({sale, title, button}) {
    return (
        <div className='relative w-[401px] h-[181px] bg-sale rounded-[11px] overflow-hidden'>
            <BubbleIconA className='absolute bottom-0 left-0 z-10'/>
            <BubbleIconB className='absolute top-0 right-0 z-10'/>
            <SaleIcon className='absolute right-[21.85px] top-1/2 transform -translate-y-1/2'/>

            <div className='py-[38.22px] pl-[22.13px] z-20 relative'>
                <p className='text-4xl font-bold'>
                    {sale}
                </p>

                <TextBaseMedium>
                    {title}
                </TextBaseMedium>

                <Margin direction={'b'} px={22.13}/>

                <ButtonB>
                    {button}
                </ButtonB>
            </div>
        </div>
    );
}

export default SaleCard;