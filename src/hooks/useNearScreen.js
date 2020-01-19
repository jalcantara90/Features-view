// Common
import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' // Polyfill for not compability API
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true) // If the element is intersecting show property is setted to true
          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref] // show is used to hide or not elments to viewport, ref is used to bind with element ref
}
