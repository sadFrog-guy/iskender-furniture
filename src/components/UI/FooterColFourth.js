import React from 'react';
import FooterHeading from "@/components/UI/FooterHeading";
import Margin from "@/components/Tools/Margin";
import FooterTextFaded from "@/components/UI/FooterTextFaded";
import FooterText from "@/components/UI/FooterText";
import WhatsAppButton from "@/components/UI/WhatsAppButton";

function FooterColFourth() {
    return (
        <div>
            <FooterHeading>
                Контакты
            </FooterHeading>

            <Margin direction={'b'} px={40}/>

            <div>
                <div>
                    <FooterTextFaded>
                        Email:
                    </FooterTextFaded>

                    <FooterText>
                        iskender.kg@gmail.com
                    </FooterText>
                </div>

                <Margin direction={'b'} px={20}/>

                <div>
                    <FooterTextFaded>
                        Телефон:
                    </FooterTextFaded>

                    <FooterText>
                        +996 (500) 000-104
                        <br/>
                        +996 (997) 000-104
                        <br/>
                        +996 (222) 000-104
                    </FooterText>
                </div>

                <Margin direction={'b'} px={40}/>

                <WhatsAppButton/>
            </div>
        </div>
    );
}

export default FooterColFourth;