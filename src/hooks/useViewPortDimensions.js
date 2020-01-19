// Common
import { useEffect, useState } from 'react'

const getViewPortDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export const useViewPortDimensions = () => {
  const [viewPortDimensions, setViewPortDimensions] = useState(getViewPortDimensions())

  const setViewPort = () => setViewPortDimensions(getViewPortDimensions())

  useEffect(() => {
    window.addEventListener('resize', setViewPort)
    return () => window.removeEventListener('resize', setViewPort)
  })

  return viewPortDimensions
}
