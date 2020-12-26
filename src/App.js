import { AmplifySignOut } from '@aws-amplify/ui-react'

import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.container}>
      <header>
        <AmplifySignOut />
      </header>
    </div>
  )
}

export default App
