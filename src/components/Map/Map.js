import { useState, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Draggable from 'react-draggable'
import classnames from 'classnames'

import HexGrid from './HexGrid/HexGrid'

import useDimensions from '../../hooks/useDimensions'
import norwold from '../../assets/images/norwold.webp'

import { mapContainer, draggable, map } from './Map.module.scss'

const Map = ({ hexes, areUnclaimedActive, ...rest }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isDraggable, setIsDraggable] = useState(false)
  const containerRef = useRef(null)
  const draggableRef = useRef(null)
  const imageRef = useRef(null)
  const [containerWidth, containerHeight] = useDimensions(containerRef)
  const [imageWidth, imageHeight] = useDimensions(imageRef)

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
          bounds={{
            left: Math.ceil(containerWidth - imageWidth),
            right: 0,
            top: Math.ceil(containerHeight - imageHeight),
            bottom: 0,
          }}
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
