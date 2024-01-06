import React from 'react';
import Image from "next/image";
function SaleIcon({...props}) {
    return (
        <Image src='/icons/illustration.svg' alt='' width={168} height={112} {...props}/>
    );
}

export default SaleIcon;