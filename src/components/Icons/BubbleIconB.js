import React from 'react';
import SphereTop from '../../../public/icons/top-sphere.svg';
import Image from "next/image";
function BubbleIconB({...props}) {
    return (
        <Image src='/icons/top-sphere.svg' alt='' width={99} height={47} {...props}/>
    );
}

export default BubbleIconB;