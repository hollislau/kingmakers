import { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Draggable from 'react-draggable'
import classnames from 'classnames'

import HexGrid from './HexGrid/HexGrid'

import useDimensions from '../../hooks/useDimensions'
import norwold from '../../assets/images/norwold.webp'

import { mapContainer, draggable, map } from './Map.module.scss'

const Map = ({ hexes, areUnclaimedActive, ...rest }) => {
  const [coords, setCoords] = useState({ x: -950, y: 0 })
  const [bounds, setBounds] = useState({ left: 0, right: 0, top: 0, bottom: 0 })
  const [isDraggable, setIsDraggable] = useState(false)

  const containerRef = useRef(null)
  const draggableRef = useRef(null)
  const imageRef = useRef(null)
  const initialized = useRef(false)

  const [
    containerWidth,
    containerHeight,
    prevContainerWidth,
    prevContainerHeight,
  ] = useDimensions(containerRef)
  const [imageWidth, imageHeight] = useDimensions(imageRef)

  useEffect(() => {
    if (imageWidth > 0 && imageHeight > 0) {
      const leftBound = Math.ceil(containerWidth - imageWidth)
      const topBound = Math.ceil(containerHeight - imageHeight)

      if (!initialized.current) {
        initialized.current = true

        setCoords(({ x, y }) => ({
          x: Math.max(
            Math.min(x - Math.round((790 - containerWidth) / 2), 0),
            leftBound,
          ),
          y: Math.max(
            Math.min(y - Math.round((400 - containerHeight) / 2), 0),
            topBound,
          ),
        }))
      } else {
        setCoords(({ x, y }) => ({
          x: Math.max(
            Math.min(
              x - Math.round((prevContainerWidth - containerWidth) / 2),
              0,
            ),
            leftBound,
          ),
          y: Math.max(
            Math.min(
              y - Math.round((prevContainerHeight - containerHeight) / 2),
              0,
            ),
            topBound,
          ),
        }))
      }

      setBounds((prev) => ({ ...prev, left: leftBound, top: topBound }))
    }
  }, [
    containerWidth,
    containerHeight,
    prevContainerWidth,
    prevContainerHeight,
    imageWidth,
    imageHeight,
  ])

  return (
    <div {...rest}>
      <div
        className={classnames(mapContainer, {
          [draggable]: isDraggable,
        })}
        ref={containerRef}
      >
        <Draggable
          position={coords}
          bounds={bounds}
          disabled={!isDraggable}
          nodeRef={draggableRef}
          onStop={(e, { x, y }) => setCoords({ x, y })}
        >
          <div className={map} ref={draggableRef}>
            <img
              src={norwold}
              ref={imageRef}
              draggable="false"
              alt="Map of Norwold"
            />
            <HexGrid
              className={classnames({ 'd-none': isDraggable })}
              hexes={hexes}
              areUnclaimedActive={areUnclaimedActive}
            />
          </div>
        </Draggable>
      </div>

      <Button className="mt-2" onClick={() => setIsDraggable((prev) => !prev)}>
        {isDraggable ? 'Lock' : 'Unlock'}
      </Button>
    </div>
  )
}

export default Map
