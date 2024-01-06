import React from 'react';
import FooterHeading from "@/components/UI/FooterHeading";
import Margin from "@/components/Tools/Margin";
import FooterTextSmall from "@/components/UI/FooterTextSmall";

function FooterColThird() {
    return (
        <div className='pt-[5px]'>
            <FooterHeading>
                Компания
            </FooterHeading>

            <Margin direction={'b'} px={40}/>

            <div className='flex flex-col gap-[15px]'>
                <FooterTextSmall>
                    Каталог
                </FooterTextSmall>

                <FooterTextSmall>
                    Избранное
                </FooterTextSmall>

                <FooterTextSmall>
                    Личный кабинет
                </FooterTextSmall>
            </div>
        </div>
    );
}

export default FooterColThird;