import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config/routes'
import { NavBar, NavSection, NavLink } from 'components/Navigation'

import './index.scss'

const App = () => {
  return (
    <div className="react">
      <NavBar>
        <NavSection>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pullrequests">Pull Requests</NavLink>
          <NavLink to="/pipelines">Pipelines</NavLink>
        </NavSection>
      </NavBar>
      <Router>
        <Switch>{routes.map(route => <Route {...route} />)}</Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
