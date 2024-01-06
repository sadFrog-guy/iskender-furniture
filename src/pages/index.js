import Base from '@/components/Tools/Base';
import Header from '@/components/Blocks/Header';
import Tabs from '@/components/Blocks/Tabs';
import React, {useState} from "react";
import Category from "@/components/Blocks/Category";
import Products from "@/components/Blocks/Products";
import Sale from "@/components/Blocks/Sale";
import Auction from "@/components/Blocks/Auction";
import Address from "@/components/Blocks/Address";
import WidthLimit from "@/components/Tools/WidthLimit";
import Image from "next/image";
import TextPoppins from "@/components/UI/TextPoppins";
import Margin from "@/components/Tools/Margin";
import FooterColFirst from "@/components/UI/FooterColFirst";
import FooterHeading from "@/components/UI/FooterHeading";
import FooterTextFaded from "@/components/UI/FooterTextFaded";
import FooterText from "@/components/UI/FooterText";
import FooterColSecond from "@/components/UI/FooterColSecond";
import FooterTextSmall from "@/components/UI/FooterTextSmall";
import FooterColThird from "@/components/UI/FooterColThird";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import FooterColFourth from "@/components/UI/FooterColFourth";
import FooterLine from "@/components/UI/FooterLine";

export default function Home() {
  return (
    <Base>
        <Header/>
        <Tabs/>
        <Category/>
        <Products/>
        <Sale/>
        <Auction/>
        <Address/>

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
    </Base>
  )
}
