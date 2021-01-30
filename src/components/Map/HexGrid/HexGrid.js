import { memo } from 'react'
import classnames from 'classnames'

import HexItem from './HexItem/HexItem'

import { container } from './HexGrid.module.scss'

const HexGrid = memo(({ className, hexes, ...rest }) => (
  <ul className={classnames(container, className)}>
    {hexes.flat().map((hex) => (
      <HexItem key={hex.id} hex={hex} {...rest} />
    ))}
  </ul>
))

export default HexGrid
