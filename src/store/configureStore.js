import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createLogger                     from 'redux-logger'
import thunkMiddleware                  from 'redux-thunk'
import reducers                         from '../reducers'

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
})

export default function configureStore() {
    const reduxRouterMiddleware = routerMiddleware()
    const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunkMiddleware, loggerMiddleware)(createStore)

    return createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
