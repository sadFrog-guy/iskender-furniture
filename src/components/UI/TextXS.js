import React from 'react';

function TextXs({children, color='#000'}) {
    return (
        <p className='text-xs text-regular' style={{color: color}}>
            {children}
        </p>
    );
}

export default TextXs;