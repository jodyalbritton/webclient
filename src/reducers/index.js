import { combineReducers }  from 'redux'
// Import reducers here

import { routerReducer } from 'react-router-redux'

export default combineReducers({

    routing: routerReducer,
    //add reducers here

})
