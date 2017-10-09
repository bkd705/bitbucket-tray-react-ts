import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config/routes'

import './index.scss'

const App = () => {
  return (
    <Router>
      <Switch>{routes.map(route => <Route {...route} />)}</Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
