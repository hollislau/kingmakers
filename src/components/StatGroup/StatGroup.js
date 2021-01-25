import { CardDeck, Card } from 'react-bootstrap'

import classes from './StatGroup.module.scss'

const StatGroup = ({ stats }) => (
  <CardDeck>
    {stats.map(({ label, value }) => (
      <Card className="text-center" key={label}>
        <Card.Body className="h2">{value}</Card.Body>
        <Card.Footer>{label}</Card.Footer>
      </Card>
    ))}
  </CardDeck>
)

export default StatGroup
