import React from 'react';

function FooterTextSmall({children}) {
    return (
        <p className='font-medium text-base text-white opacity-80'>
            {children}
        </p>
    );
}

export default FooterTextSmall;