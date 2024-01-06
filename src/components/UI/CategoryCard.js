import React from 'react';
import TextBaseMedium from "@/components/UI/TextBaseMedium";
import TextXS from "@/components/UI/TextXS";

function CategoryCard({src, alt, title, subtitle}) {
    return (
        <div className='w-[170px] h-[170px] bg-white rounded-[10px] p-[10px]'>
            <div className=''>
                <TextBaseMedium>
                    {title}
                </TextBaseMedium>

                <TextXS color='#727272'>
                    {subtitle} товаров
                </TextXS>
            </div>

            <div className='flex w-full justify-end items-end h-[115px]'>
                <img
                    src={src}
                    alt={alt}
                    className='w-[110px]'
                />
            </div>
        </div>
    );
}

export default CategoryCard;