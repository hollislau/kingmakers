import classnames from 'classnames'

import classes from './HexGrid.module.scss'

const HexGrid = ({ hexes }) => (
  <ul className={classes.container}>
    {hexes.flat().map(({ id, claimed, hasStronghold }) => (
      <li
        className={classnames(classes.hex, {
          [classes.claimed]: claimed,
          [classes.stronghold]: hasStronghold,
        })}
        key={id}
      ></li>
    ))}
  </ul>
)

export default HexGrid
