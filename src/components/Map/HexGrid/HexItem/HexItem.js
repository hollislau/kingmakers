import { memo } from 'react'
import classnames from 'classnames'

import {
  container,
  unclaimed,
  claimed,
  stronghold,
} from './HexItem.module.scss'

const HexItem = memo(
  ({
    hex: { isClaimed, hasStronghold },
    areUnclaimedActive,
    className,
    ...rest
  }) => (
    <li
      className={classnames(container, className, {
        [unclaimed]: areUnclaimedActive,
        [claimed]: isClaimed,
        [stronghold]: hasStronghold,
      })}
      {...rest}
    ></li>
  ),
)

export default HexItem
