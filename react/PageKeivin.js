import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import UserKeivin from './components/UserKeivin'

const PageKeivin = () => (
  <Fragment>
    <Route exact path="/keivin" component={UserKeivin} />
  </Fragment>
)

export default PageKeivin
