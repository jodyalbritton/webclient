import { Route, Switch }        from 'react-router'
import React                        from 'react'

import DefaultDashboard         from '../components/dashboard'


export default function configRoutes(store) {
    return (

        <Switch>
          <Route exact path="/" component={DefaultDashboard} />
        </Switch>
    )
}
