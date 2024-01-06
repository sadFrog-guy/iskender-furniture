import React from 'react';

function TextBaseRegular({children}) {
    return (
        <p className='font-regular text-base leading-[16.8px]'>
            {children}
        </p>
    );
}

export default TextBaseRegular;