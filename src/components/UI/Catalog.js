import React from 'react'
import CatalogIcon from '../Icons/CatalogIcon'
import ButtonA from './ButtonA'

export default function Catalog() {
  return (
    <ButtonA>
        <CatalogIcon/>

        <p className='text-lg color-white'>
            Каталог
        </p>
    </ButtonA>
  )
}
