import React from 'react';

function FooterHeading({children}) {
    return (
        <p className='font-bold text-3xl text-white'>
            {children}
        </p>
    );
}

export default FooterHeading;