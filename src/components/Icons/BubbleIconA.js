import React from 'react';
import Image from "next/image";
function BubbleIconA({...props}) {
    return (
        <Image src='/icons/bottom-sphere.svg' width={96} height={83} alt='' {...props}/>
    );
}

export default BubbleIconA;