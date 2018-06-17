import { combineReducers } from 'redux'
import app from './app'
import objects from './objects'

export default combineReducers({
	app,
	objects,
})