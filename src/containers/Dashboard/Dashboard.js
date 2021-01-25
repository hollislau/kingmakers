import { useState } from 'react'

import StatGroup from '../../components/StatGroup/StatGroup'

import classes from './Dashboard.module.scss'

const stats = [
  { label: 'Stability', value: '+0' },
  { label: 'Loyalty', value: '-2' },
]

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <StatGroup stats={stats} />
    </div>
  )
}

export default Dashboard
