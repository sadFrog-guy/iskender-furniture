import React from 'react'
import WidthLimit from '../Tools/WidthLimit'
import Margin from '../Tools/Margin'
import SearchBar from '../UI/SearchBar'
import Catalog from '../UI/Catalog'
import Auth from '../UI/Auth'

export default function Header() {
  return (
    <header className='bg-base-blue w-full flex justify-center h-[70px]'>
        <WidthLimit
            className='flex items-center h-full'
        >
            <img
                src="/images/logo.png"
                alt="Logo Iskender"
                className='w-[115px] h-[30px] mr-[52px]'
            />
        
            <Catalog/>

            <Margin direction={'r'} px={22}/>

            <SearchBar/>

            <Margin direction={'r'} px={22}/>

            <Auth/>
        </WidthLimit>
    </header>
  )
}
