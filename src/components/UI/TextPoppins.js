import React from 'react';

function TextPoppins({children}) {
    return (
        <p className='font-regular text-base font-poppins text-white'>
            {children}
        </p>
    );
}

export default TextPoppins;