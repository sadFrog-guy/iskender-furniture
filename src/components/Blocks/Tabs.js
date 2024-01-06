import React from 'react';
import Tab from "@/components/UI/Tab";
import EmptyTab from "@/components/UI/EmptyTab";
import WidthLimit from "@/components/Tools/WidthLimit";

function Tabs(props) {
    const arrayToMap = Array.from({ length: 9 }, (_, index) => index);

    return (
        <WidthLimit
            className='flex gap-[30px] pt-[20px] pb-[49px]'
        >
            <Tab
                src={'/images/bathroom.jpg'}
                alt={'Bathroom'}
                title={'Скидки'}
            />

            <Tab
                src={'/images/bathroom.jpg'}
                alt={'Bathroom'}
                title={'Скидки'}
            />

            <Tab
                src={'/images/bathroom.jpg'}
                alt={'Bathroom'}
                title={'Скидки'}
                isLight={true}
            />

            <Tab
                src={'/images/bathroom.jpg'}
                alt={'Bathroom'}
                title={'Скидки'}
                isLight={true}
            />

            <Tab
                src={'/images/bathroom.jpg'}
                alt={'Bathroom'}
                title={'Скидки'}
                isLight={true}
            />

            {arrayToMap.map(item => {
                return <EmptyTab/>
            })}

        </WidthLimit>
    );
}

export default Tabs;