export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export const addTodo = text => {
	return {
		type: ADD_TODO,
		text
	}
}

export const removeTodo = key => {
	return {
		type: REMOVE_TODO,
		key
	}
}

export const completeTodo = key => {
	return {
		type: COMPLETE_TODO,
		key
	}
}