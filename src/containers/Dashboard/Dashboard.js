import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Map from '../../components/Map/Map'
import StatGroup from '../../components/StatGroup/StatGroup'

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

const hexes = generateHexMatrix(22, 51)

const Dashboard = () => {
  return (
    <Container className="py-3" fluid>
      <Row>
        <Col md={4}>
          <h3 className="text-center">Dominion Attributes</h3>
          <StatGroup stats={stats} />
        </Col>
        <Col md={4}>
          <Map className="mt-2" hexes={hexes} />
          <Button className="mt-2">Button</Button>
        </Col>
        <Col md={4}>
          <h3 className="text-center">Hex Attributes</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
