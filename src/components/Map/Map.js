import HexGrid from '../HexGrid/HexGrid'
import map from '../../assets/images/norwold.webp'

import classes from './Map.module.scss'

const Map = ({ hexes }) => (
  <div className={classes.container}>
    <img src={map} alt="Map of Norwold" />
    <HexGrid hexes={hexes} />
  </div>
)

export default Map
