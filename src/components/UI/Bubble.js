import React from 'react'
import Notification from './Notification'

export default function Bubble({children, notificate = false, notificateValue = 0}) {
  return (
    <div className="bg-white rounded-[100%] w-[30px] h-[30px] p-[7px] relative cursor-pointer">
        {children}

        {notificate
            && <Notification>{notificateValue}</Notification>
        }
    </div>
  )
}
