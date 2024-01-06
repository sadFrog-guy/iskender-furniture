import React from 'react';
import WidthLimit from "@/components/Tools/WidthLimit";
import FooterColFirst from "@/components/UI/FooterColFirst";
import Margin from "@/components/Tools/Margin";
import FooterColSecond from "@/components/UI/FooterColSecond";
import FooterColThird from "@/components/UI/FooterColThird";
import FooterColFourth from "@/components/UI/FooterColFourth";
import FooterLine from "@/components/UI/FooterLine";
import Image from "next/image";

function Footer() {
    return (
        <div className='flex justify-center bg-gradient pt-[72px] pb-[30px] bg-gradient-to-r from-gradient-a via-gradient-b to-gradient-c w-full'>
            <WidthLimit className=''>
                <div className='flex'>
                    <FooterColFirst/>

                    <Margin direction={'r'} px={184}/>

                    <FooterColSecond/>

                    <Margin direction={'r'} px={155}/>

                    <FooterColThird/>

                    <Margin direction={'r'} px={167}/>

                    <FooterColFourth/>
                </div>

                <FooterLine/>

                <div className='flex justify-between'>
                    <p className='font-normal text-base text-white opacity-50'>
                        © 2023 Iskender.kg - Отечественный бренд сантехники
                    </p>

                    <div className='flex gap-[15px]'>
                        <Image
                            src='/icons/instagram.svg'
                            alt='instagram'
                            width={24}
                            height={24}
                            className='opacity-50'
                        />
                        <Image
                            src='/icons/facebook.svg'
                            alt='facebook'
                            width={24}
                            height={24}
                            className='opacity-50'
                        />
                    </div>
                </div>

            </WidthLimit>
        </div>
    );
}

export default Footer;