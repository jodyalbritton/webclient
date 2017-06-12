import React                    from 'react'
import { render }               from 'react-dom'
import { AppContainer }         from 'react-hot-loader'
import injectTapEventPlugin     from 'react-tap-event-plugin'
import configureStore           from './store/configureStore'
import Root                     from './containers/root'
import createHistory from 'history/createBrowserHistory'

import "normalize.css/normalize.css"
import "./styles/main.scss"

const store = configureStore(createHistory)

injectTapEventPlugin()


render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    const NewRoot = require('./containers/root').default
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('container')
    )
  })
}
