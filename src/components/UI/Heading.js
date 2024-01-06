import React from 'react';

function Heading({children}) {
    return (
        <h1
            className='font-semibold text-4xl-plus'
        >
            {children}
        </h1>
    );
}

export default Heading;