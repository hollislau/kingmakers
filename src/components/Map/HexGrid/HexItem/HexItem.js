import { memo } from 'react'
import classnames from 'classnames'

import {
  container,
  unclaimed,
  claimed,
  stronghold,
} from './HexItem.module.scss'

const HexItem = memo(
  ({ hex: { isClaimed, hasStronghold }, areUnclaimedActive }) => (
    <li
      className={classnames(container, {
        [unclaimed]: areUnclaimedActive,
        [claimed]: isClaimed,
        [stronghold]: hasStronghold,
      })}
    ></li>
  ),
)

export default HexItem
