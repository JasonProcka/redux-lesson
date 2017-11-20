import React, { Component } from "react";
// Containers
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Todos extends Component {
	render() {
		return (
			<div>
				<AddTodo />
				<TodoList />
			</div>
		);
	}
}

export default Todos;
