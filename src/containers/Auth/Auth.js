import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyGreetings,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

import { container, logo } from './Auth.module.scss'

const Auth = ({ children }) => {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className={container}>
      <AmplifyGreetings username={user.attributes?.given_name}>
        <Link slot="logo" to="/">
          <Logo className={logo} title="Kingmakers logo" />
          Kingmakers
        </Link>
        <span slot="greetings-message">
          Greetings, {user.attributes?.given_name}
        </span>
      </AmplifyGreetings>

      <main>{children}</main>
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

export default Auth
