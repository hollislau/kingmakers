import { useRef, useEffect } from 'react'

const usePrevious = (value, initial = null) => {
  const ref = useRef(initial)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
