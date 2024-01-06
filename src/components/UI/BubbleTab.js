import React from 'react';

function BubbleTab({children, isLight = false}) {
    return (
        <div
            className='w-[60px] h-[60px] rounded-[100%] overflow-hidden border-[2px] border-gray-700'
            style={isLight ? {borderColor: '#D7EEFE'} : {}}
        >
            {children}
        </div>
    );
}

export default BubbleTab;