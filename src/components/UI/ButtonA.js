import React from 'react'

export default function ButtonA({children}) {
  return (
    <button className='rounded-xl text-white bg-dark-blue flex items-center justify-center pt-[10px] pb-[10px] pr-[26px] pl-[26px] gap-[15px]'>
        {children}
    </button>
  )
}
