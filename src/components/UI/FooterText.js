import React from 'react';

function FooterText({children}) {
    return (
        <p className='font-medium text-lg text-white'>
            {children}
        </p>
    );
}

export default FooterText;