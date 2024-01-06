import React from 'react';
import FooterHeading from "@/components/UI/FooterHeading";
import Margin from "@/components/Tools/Margin";
import FooterTextFaded from "@/components/UI/FooterTextFaded";
import FooterText from "@/components/UI/FooterText";

function FooterColSecond() {
    return (
        <div>
            <FooterHeading>
                Адреса
            </FooterHeading>

            <Margin direction={'b'} px={40}/>

            <div className='flex flex-col gap-[20px]'>
                <div>
                    <FooterTextFaded>
                        ЭлитСтрой
                    </FooterTextFaded>

                    <FooterText>
                        ул. Ден-Сяопина 18/1
                    </FooterText>
                </div>

                <div>
                    <FooterTextFaded>
                        Баткен
                    </FooterTextFaded>

                    <FooterText>
                        ул. Льва-Толстого 19
                    </FooterText>
                </div>

                <div>
                    <FooterTextFaded>
                        ТааТан
                    </FooterTextFaded>

                    <FooterText>
                        ул. Лермонтова 6
                    </FooterText>
                </div>
            </div>
        </div>
    );
}

export default FooterColSecond;