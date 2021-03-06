import { combineReducers } from 'redux'
import leadReducer from './leads/reducers'
import errorReducer from './errors/reducers'
import messageReducer from './messages/reducers'
import authReducer from './auth/reducers'

const rootReducer = combineReducers({
  leads: leadReducer,
  error: errorReducer,
  message: messageReducer,
  auth: authReducer,
})

export default rootReducer
