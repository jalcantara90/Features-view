// Common
import React from 'react'

// Icons
import { MdErrorOutline } from 'react-icons/md'
import { IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline } from 'react-icons/io'

export const SemaphoreIcon = ({ status = 'success', size = '32px', color }) => {
  switch (status) {
    case 'success':
      return <IoIosCheckmarkCircleOutline size={size} color={color || 'green'} />
    case 'warning':
      return <MdErrorOutline size={size} color={color || '#ffc107'} />
    case 'fail':
      return <IoIosCloseCircleOutline size={size} color={color || 'red'} />
    default:
      return <IoIosCheckmarkCircleOutline size={size} color={color || 'green'} />
  }
}
