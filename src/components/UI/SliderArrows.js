import React from 'react';
import ArrowIcon from "@/components/Icons/ArrowIcon";

function SliderArrows() {
    return (
        <>
            <div className='absolute left-[-48px] top-1/2 transform -translate-y-1/2'>
                <ArrowIcon/>
            </div>

            <div className='absolute right-[-48px] top-1/2 transform -translate-y-1/2'>
                <ArrowIcon flip={true}/>
            </div>
        </>
    );
}

export default SliderArrows;