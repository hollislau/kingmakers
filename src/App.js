import { useState, useEffect } from 'react'
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyGreetings,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import classes from './App.module.scss'

const App = () => {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className={classes.container}>
      <header>
        <AmplifyGreetings username={user.attributes?.given_name} />
      </header>
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignIn
        slot="sign-in"
        usernameAlias="email"
        headerText="Sign in to Kingmakers"
        hideSignUp={true}
      />
    </AmplifyAuthenticator>
  )
}

export default App
