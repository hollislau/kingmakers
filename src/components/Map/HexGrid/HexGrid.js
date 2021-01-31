import { memo } from 'react'
import classnames from 'classnames'

import HexItem from './HexItem/HexItem'

import { container } from './HexGrid.module.scss'

const HexGrid = memo(({ hexes, areUnclaimedActive, className, ...rest }) => (
  <ul className={classnames(container, className)} {...rest}>
    {hexes.flat().map((hex) => (
      <HexItem key={hex.id} hex={hex} areUnclaimedActive={areUnclaimedActive} />
    ))}
  </ul>
))

export default HexGrid
