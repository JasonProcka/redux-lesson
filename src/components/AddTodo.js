import React, { Component } from "react";
import styled from "styled-components";
import "../styles/add-todo.css";

// Styling

const TodoTextInput = styled.input`
	width: 100%;
	padding: 14px 0;
	display: block;
	border: 0;
	font-family: "Lato", sans-serif;
	font-size: 28px;
	color: black;
	background-color: transparent;
`;

const TodoButtonInput = styled.button`
	display: block;
	padding: 8px 14px;
	border: 0;
	border-radius: 3px;
	margin-top: 10px;
	color: #fff;
	background-color: #3498db;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.12);
`;

class AddTodo extends Component {
	state = {
		value: ""
	};

	handleOnChange = event => {
		this.setState({ value: event.target.value });
	};

	handleOnClick = event => {
		event.preventDefault();

		if (this.state.value) {
			this.props.onAddTodo(this.state.value);
			this.setState({ value: "" });
		}
	};

	render() {
		return (
			<form>
				<TodoTextInput
					className="todo-input"
					type="text"
					onChange={this.handleOnChange.bind(this)}
					value={this.state.value}
					placeholder="Today I'll..."
				/>
				<TodoButtonInput onClick={this.handleOnClick.bind(this)}>
					Add
				</TodoButtonInput>
			</form>
		);
	}
}

export default AddTodo;
