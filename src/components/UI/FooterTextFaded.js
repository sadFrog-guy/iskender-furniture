import React from 'react';

function FooterTextFaded({children}) {
    return (
        <p className='font-normal text-lg text-faded'>
            {children}
        </p>
    );
}

export default FooterTextFaded;