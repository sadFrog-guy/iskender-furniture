import React from 'react';

function TextBaseMedium({children}) {
    return (
        <p className='font-medium text-base'>
            {children}
        </p>
    );
}

export default TextBaseMedium;