import React from 'react';
import BubbleTab from "@/components/UI/BubbleTab";
import TextXS from "@/components/UI/TextXS";

function Tab({title, src, alt, isLight}) {
    return (
        <div className='flex flex-col gap-[7px] text-center'>
            <BubbleTab isLight={isLight}>
                <img
                    src={src}
                    alt={alt}
                    className='w-full h-full'
                />
            </BubbleTab>

            <TextXS>
                {title}
            </TextXS>
        </div>
    );
}

export default Tab;