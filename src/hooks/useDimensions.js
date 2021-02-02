import { useState, useEffect } from 'react'

import usePrevious from '../hooks/usePrevious'

import { debounce } from '../global/utilities'

const useDimensions = (ref, initialWidth = 0, initialHeight = 0) => {
  const [width, setWidth] = useState(initialWidth)
  const [height, setHeight] = useState(initialHeight)
  const prevWidth = usePrevious(width, initialWidth)
  const prevHeight = usePrevious(height, initialHeight)

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

  return [width, height, prevWidth, prevHeight]
}

export default useDimensions
