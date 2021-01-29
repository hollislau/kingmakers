import HexGrid from '../HexGrid/HexGrid'
import norwold from '../../assets/images/norwold.webp'

import { container, map } from './Map.module.scss'

const Map = ({ hexes }) => (
  <div className={container}>
    <div className={map}>
      <img src={norwold} alt="Map of Norwold" />
      <HexGrid hexes={hexes} areUnclaimedHighlighted />
    </div>
  </div>
)

export default Map
