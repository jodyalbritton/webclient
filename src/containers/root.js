import React                        from 'react'
import { Provider }                 from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Theme                        from './muiTheme'
import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider'
import invariant                    from 'invariant'
import configRoutes                 from '../routes'
import createHistory from 'history/createBrowserHistory'



const Root = ({ store }) => {
    const routerHistory = createHistory()

    invariant(
      routerHistory,
      '<Root /> needs either a routingContext or routerHistory to render.'
    )

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={Theme}>
          <ConnectedRouter history={routerHistory}>
            {configRoutes(store)}
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    )
}


export default Root
