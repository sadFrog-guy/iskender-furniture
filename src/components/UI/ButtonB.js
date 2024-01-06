import React from 'react';

function ButtonB({children}) {
    return (
        <button className='bg-dark-blue text-xs-minus py-[8px] px-[24px] rounded-[11px] text-white'>
            {children}
        </button>
    );
}

export default ButtonB;