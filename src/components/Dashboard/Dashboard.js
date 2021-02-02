// import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import classnames from 'classnames'

import Map from '../Map/Map'
import StatGroup from '../StatGroup/StatGroup'

// import { container } from './Dashboard.module.scss'

const stats = [
  { label: 'Stability', value: '+0' },
  { label: 'Loyalty', value: '-2' },
]

const generateHexMatrix = (rows, columns) => {
  const matrix = []

  let counter = 1

  for (let i = 0; i < rows; i++) {
    const row = []

    for (let j = 0; j < columns; j++) {
      row.push({ id: counter++ })
    }

    matrix.push(row)
  }

  return matrix
}

// TODO: pass function to useState to initialize matrix to avoid recreating or use useMemo
const hexes = generateHexMatrix(22, 51)

const Dashboard = ({ className, ...rest }) => {
  return (
    <Container className={classnames('py-3', className)} fluid {...rest}>
      <Row>
        <Col className="border border-dark rounded-sm" md={3}>
          <h3 className="text-center mt-2">Dominion Attributes</h3>
          <StatGroup stats={stats} />
        </Col>

        <Col md={6}>
          <Map hexes={hexes} />
        </Col>

        <Col className="border border-dark rounded-sm" md={3}>
          <h3 className="text-center mt-2">Hex Attributes</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
