import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from './pages'
import { ErrorPage } from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Page.Home} />
    <Route path="/about" component={Page.About} />
    <Route path='*' component={ErrorPage} />
  </Switch>
)

export default Routes