import { useRef } from 'react'
import Draggable from 'react-draggable'
import classnames from 'classnames'

import HexGrid from './HexGrid/HexGrid'

import useDimensions from '../../hooks/useDimensions'
import norwold from '../../assets/images/norwold.webp'

import { container, map } from './Map.module.scss'

const Map = ({ className, ...rest }) => {
  const containerRef = useRef(null)
  const draggableRef = useRef(null)
  const imageRef = useRef(null)
  const [containerWidth, containerHeight] = useDimensions(containerRef)
  const [imageWidth, imageHeight] = useDimensions(imageRef)

  return (
    <div className={classnames(container, className)} ref={containerRef}>
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        bounds={{
          left: Math.ceil(containerWidth - imageWidth),
          right: 0,
          top: Math.ceil(containerHeight - imageHeight),
          bottom: 0,
        }}
        nodeRef={draggableRef}
      >
        <div className={map} ref={draggableRef}>
          <img
            src={norwold}
            ref={imageRef}
            draggable="false"
            alt="Map of Norwold"
          />
          <HexGrid {...rest} />
        </div>
      </Draggable>
    </div>
  )
}

export default Map
