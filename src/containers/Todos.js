import React, { Component } from "react";
import styled from 'styled-components';
// Containers
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodosWrapper = styled.div`
	max-width: 760px;
	padding: 0 40px;
	margin: auto;
`

class Todos extends Component {
	render() {
		return (
			<TodosWrapper>
				<AddTodo />
				<TodoList />
			</TodosWrapper>
		);
	}
}

export default Todos;
