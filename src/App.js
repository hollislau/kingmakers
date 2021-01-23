import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Auth from './containers/Auth/Auth'
import Dashboard from './containers/Dashboard/Dashboard'

const App = () => (
  <BrowserRouter>
    <Auth>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Auth>
  </BrowserRouter>
)

export default App
