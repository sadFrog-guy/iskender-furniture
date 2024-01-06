import React from 'react';
import Image from "next/image";
import Margin from "@/components/Tools/Margin";
import TextPoppins from "@/components/UI/TextPoppins";

function FooterColFirst() {
    return (
        <div>
            <Image src='/images/logo2.svg' alt='Logo' width={183} height={51}/>

            <Margin direction={'b'} px={42}/>

            <TextPoppins>
                Первый отечественный бренд
                <br/>
                Iskender на рынке сантехники от
                <br/>
                компании ОсОО «Стройдом.кг»
            </TextPoppins>

            <Margin direction={'b'} px={72}/>

            <div className='flex gap-[18.25px]'>
                <Image
                    src='/images/appstore.png'
                    alt='App Store'
                    width={143.75}
                    height={46}
                />

                <Image
                    src='/images/google.png'
                    alt='Google Play'
                    width={143.75}
                    height={46}
                />
            </div>
        </div>
    );
}

export default FooterColFirst;