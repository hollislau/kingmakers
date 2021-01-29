import classnames from 'classnames'

import {
  container,
  hex,
  highlightAll,
  claimed,
  stronghold,
} from './HexGrid.module.scss'

const HexGrid = ({ hexes, shouldHighlightAll }) => (
  <ul
    className={classnames(container, {
      [highlightAll]: shouldHighlightAll,
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
