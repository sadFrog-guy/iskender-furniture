import React, {useState} from 'react';
import MinusIcon from "@/components/Icons/MinusIcon";
import PlusIcon from "@/components/Icons/PlusIcon";

function Crement({operation = 0}) {
    const [isFocused, setFocused] = useState(false)
    const classes = 'bg-[#F5F5F5] w-[33px] h-[33px] rounded-[100%] flex items-center justify-center cursor-pointer transition-all'

    return (
        <button
            className={classes}
            style={
                isFocused
                    ? {background: '#3286C2'}
                    : {}
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        >
            {operation
                ? <PlusIcon fill={isFocused ? '#fff' : '#000'}/>
                : <MinusIcon fill={isFocused ? '#fff' : '#000'}/>
            }

        </button>
    );
}

export default Crement;