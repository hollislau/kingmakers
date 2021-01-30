import { useState, useEffect } from 'react'

const useDimensions = (ref) => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useEffect(() => {
    const node = ref.current
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width)
        setHeight(entry.contentRect.height)
      }
    })

    resizeObserver.observe(node)

    return () => resizeObserver.unobserve(node)
  }, [ref])

  return [width, height]
}

export default useDimensions
