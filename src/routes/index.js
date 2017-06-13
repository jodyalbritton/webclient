import { Route, Switch }        from 'react-router'
import React                    from 'react'

import DefaultDashboard         from '../components/dashboard'
import BotsView                 from '../components/bots'
import AccountsView             from '../components/accounts'
import AboutView                from '../components/about'

export default function configRoutes(store) {
    return (

        <Switch>
          <Route exact path="/" component={DefaultDashboard} />
          <Route path="/bots" component={BotsView} />
          <Route path="/accounts" component={AccountsView} />
          <Route path="/about" component={AboutView} />
        </Switch>
    )
}
