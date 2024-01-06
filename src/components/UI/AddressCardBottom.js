import React from 'react';
import AddressWrap from "@/components/UI/AddressWrap";
import LocationIcon from "@/components/Icons/LocationIcon";
import TextBaseRegular from "@/components/UI/TextBaseRegular";
import Margin from "@/components/Tools/Margin";
import ClockIcon from "@/components/Icons/ClockIcon";
import PhoneIcon from "@/components/Icons/PhoneIcon";

function AddressCardBottom() {
    return (
        <div>
            <AddressWrap>
                <LocationIcon/>

                <TextBaseRegular>
                    Кыргызстан, г. Бишкек
                    <br/>
                    ул. Турусбекова A167
                </TextBaseRegular>
            </AddressWrap>

            <Margin direction={'b'} px={21}/>

            <div className='flex justify-between'>
                <AddressWrap>
                    <ClockIcon/>

                    <TextBaseRegular>
                        08:00 - 22:00
                    </TextBaseRegular>
                </AddressWrap>

                <AddressWrap>
                    <PhoneIcon/>

                    <TextBaseRegular>
                        +996 500 345 345
                    </TextBaseRegular>
                </AddressWrap>
            </div>
        </div>
    );
}

export default AddressCardBottom;