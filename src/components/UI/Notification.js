import React from 'react'

export default function Notification({children}) {
  return (
    <span className='bg-[#DC3434] w-[12px] h-[12px] top-[-3px] right-[-3px] flex justify-center items-center text-xs-notification rounded-[100%] absolute'>
        {children}
    </span>
  )
}
