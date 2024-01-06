import React from 'react';

function Price({children, isDiscount = false, discountPrice = 0}) {
    return (
        <p className='font-bold text-2xl flex gap-[10px]' style={isDiscount ? {color: '#FF0000'} : {}}>
            {children}

            {isDiscount
                && <span className='font-bold text-base line-through' style={{color: '#808080'}}>{discountPrice} c</span>
            }
        </p>
    );
}

export default Price;