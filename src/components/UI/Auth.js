import React from 'react'
import ButtonA from '../UI/ButtonA'
import CatalogIcon from '../Icons/CatalogIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import CartIcon from '../Icons/CartIcon'
import Bubble from '../UI/Bubble'

export default function Auth() {
  return (
    <div className='flex gap-[9px] text-white'>
        <div className='text-right leading-3'>
            <p className='text-xs-minus'>
                Добро пожаловать
            </p>
            <p className='text-base font-semibold'>
                Вход/Регистрация
            </p>
        </div>

        <Bubble>
            <ProfileIcon/>
        </Bubble>

        <div
            className='bg-white h-[30px] w-[1px] opacity-20'
        />

        <Bubble
            notificate={true}
            notificateValue={2}
        >
            <CartIcon/>
        </Bubble>
    </div>
  )
}
