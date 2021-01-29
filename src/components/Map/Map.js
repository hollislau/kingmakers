import classnames from 'classnames'

import HexGrid from '../HexGrid/HexGrid'
import norwold from '../../assets/images/norwold.webp'

import { container, map } from './Map.module.scss'

const Map = ({ className, ...rest }) => (
  <div className={classnames(container, className)}>
    <div className={map}>
      <img src={norwold} alt="Map of Norwold" />
      <HexGrid {...rest} />
    </div>
  </div>
)

export default Map
