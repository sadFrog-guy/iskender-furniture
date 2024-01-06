import React from 'react'
import SearchIcon from '../Icons/SearchIcon'

export default function SearchBar() {
  return (
    <div className='w-[675px] text-sm-plus text-[#ABABAB] flex rounded-xl bg-white pt-[10px] pb-[10px] pr-[26px] pl-[26px] gap-[15px]'>
        <SearchIcon/>

        <input 
            type='text'
            placeholder='Поиск'
            className='w-full outline-none text-black'
        />

        <p>
            42903
        </p>
    </div>
  )
}
