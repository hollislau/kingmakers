import { useState } from 'react'
import { Button } from 'react-bootstrap'

import Map from '../../components/Map/Map'
import StatGroup from '../../components/StatGroup/StatGroup'

import { container } from './Dashboard.module.scss'

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
    <div className={container}>
      <Map hexes={hexes} />
      <Button>Button</Button>
      <StatGroup stats={stats} />
    </div>
  )
}

export default Dashboard
