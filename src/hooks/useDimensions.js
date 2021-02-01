import { useState, useEffect } from 'react'

import { debounce } from '../global/utilities'

const useDimensions = (ref) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const roCb = (entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width)
        setHeight(entry.contentRect.height)
      }
    }

    const node = ref.current
    const ro = new ResizeObserver(debounce(roCb, 250))

    ro.observe(node)

    return () => ro.unobserve(node)
  }, [ref])

  return [width, height]
}

export default useDimensions
