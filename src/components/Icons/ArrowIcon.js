import React from 'react';

function ArrowIcon({flip = false}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" style={flip ? {transform: 'scale(-1, -1)'} : {}}>
            <path d="M23.8125 29.9L15.6625 21.75C14.7 20.7875 14.7 19.2125 15.6625 18.25L23.8125 10.1" stroke="#171717" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}

export default ArrowIcon;