import classnames from 'classnames'

import {
  container,
  hex,
  unclaimedHighlighted,
  claimed,
  stronghold,
} from './HexGrid.module.scss'

const HexGrid = ({ hexes, areUnclaimedHighlighted }) => (
  <ul
    className={classnames(container, {
      [unclaimedHighlighted]: areUnclaimedHighlighted,
    })}
  >
    {hexes.flat().map(({ id, isClaimed, hasStronghold }) => (
      <li
        className={classnames(hex, {
          [claimed]: isClaimed,
          [stronghold]: hasStronghold,
        })}
        key={id}
      ></li>
    ))}
  </ul>
)

export default HexGrid
