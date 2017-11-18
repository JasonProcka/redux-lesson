import React, { Component } from 'react'
// Containers
import AddTodo from './containers/AddTodo'
// Components
import TodoList from './components/TodoList'

class AddTodo extends Component {
	render() {
		return (
			<div>
				<AddTodo />
				<TodoList />
			</div>
		)
	}
}

export default AddTodo