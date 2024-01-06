import React from 'react';

function AddressWrap({children}) {
    return (
        <div className='flex gap-[7px] items-start'>
            {children}
        </div>
    );
}

export default AddressWrap;