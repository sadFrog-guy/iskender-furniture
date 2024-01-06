import React from 'react'

export default function WidthLimit({children, ...props}) {
  return (
    <div className='w-[1240px]'>
      <div {...props}>
        {children}
      </div>
    </div>
  )
}
