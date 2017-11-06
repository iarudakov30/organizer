import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import notes from './notes'
import todos from './todos'
import noteEditor from './noteEditor'
import notification from './notification'

export default combineReducers({
    auth,
    notes,
    todos,
    noteEditor,
    notification,
    form: formReducer,
    routing: routerReducer
})