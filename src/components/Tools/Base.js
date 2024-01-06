import React from 'react'

export default function Base({children}) {
  return (
    <div className='flex items-center flex-col'>
        {children}
    </div>
  )
}
