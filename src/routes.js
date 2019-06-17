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
    <Route path="/products" component={Page.Products} />
    <Route path="/users" component={Page.Users} />
    <Route path="/categories" component={Page.Categories} />
    <Route path="/schema" component={Page.Schema} />
    <Route path="/products-example" component={Page.Example} />
    <Route path='*' component={ErrorPage} />
  </Switch>
)

export default Routes