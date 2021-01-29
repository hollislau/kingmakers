import HexGrid from '../HexGrid/HexGrid'
import norwold from '../../assets/images/norwold.webp'

import { container, map } from './Map.module.scss'

const Map = ({ hexes, shouldHighlightAll }) => (
  <div className={container}>
    <div className={map}>
      <img src={norwold} alt="Map of Norwold" />
      <HexGrid hexes={hexes} shouldHighlightAll={shouldHighlightAll} />
    </div>
  </div>
)

export default Map
