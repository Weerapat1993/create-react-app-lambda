import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from './pages'
import { ErrorPage } from './components'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Page.Home} />
    <Route path="/about" component={Page.About} />
    <Route path="/github" component={Page.Github} />
    <Route path="/apollo-link-rest" component={Page.Apollo.LinkRest} />
    <Route path="/apollo-link-state" component={Page.Apollo.LinkState} />
    <Route path="/playground" component={Page.Playground} />
    <Route path="/products" component={Page.Products} />
    <Route path='*' component={ErrorPage} />
  </Switch>
)

export default Routes