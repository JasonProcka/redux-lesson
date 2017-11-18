import { ADD_TODO } from '../actions/index'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			let { text } = action;
			return [...state, { text, completed: false }]
		default:
			return state
	}
}

const reducers = { todos }

export default combineReducers(reducers)