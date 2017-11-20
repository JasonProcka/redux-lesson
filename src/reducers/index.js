import { combineReducers } from "redux";
// Actions
import { ADD_TODO } from "../actions/index";
import { REMOVE_TODO } from "../actions/index";

var todoKey = -1;

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			let { text } = action;
			todoKey++;
			return [...state, { text, completed: false, key: todoKey }];
		case REMOVE_TODO:
			return state;
		default:
			return state;
	}
};

const reducers = { todos };

export default combineReducers(reducers);
