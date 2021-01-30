import { memo } from 'react'

import HexItem from './HexItem/HexItem'

import { container } from './HexGrid.module.scss'

const HexGrid = memo(({ hexes, areUnclaimedActive }) => (
  <ul className={container}>
    {hexes.flat().map((hex) => (
      <HexItem key={hex.id} hex={hex} areUnclaimedActive={areUnclaimedActive} />
    ))}
  </ul>
))

export default HexGrid
