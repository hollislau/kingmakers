import { CardDeck, Card } from 'react-bootstrap'

import classes from './StatGroup.module.scss'

const StatGroup = ({ stats }) => (
  <CardDeck>
    {stats.map(({ label, value }) => (
      <Card className="text-center border-primary" key={label}>
        <Card.Body className="font-size-xl p-2">{value}</Card.Body>
        <Card.Footer className="text-white bg-primary p-2">{label}</Card.Footer>
      </Card>
    ))}
  </CardDeck>
)

export default StatGroup
