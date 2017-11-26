import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styles

const TodoWrapper = styled.div`
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Todo = styled.div`
	padding: 20px;
	display: inline-block;
`;

const RemoveTodo = styled.button`
	padding: 0;
	border: 0;
	border-radius: 3px;
	color: #fff;
	background-color: #3498db;
`;

const EditTodo = styled.button`
	border: 0;
`;

const EditingTodo = styled.input`
	width: 100%;
	border: 0;
	padding: 10px 14px;
`

class TodoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editingTodo: false,
			currentEdit: this.props.todoText		
		}
	}

	handleOnClickTodo = key => {
		this.props.onCompleteTodo(key);
	};

	handleOnClickEdit = key => {
		this.setState({
			editingTodo: true
		})
	}

	handleOnSubmitChange = key => {
		this.setState({
			editingTodo: false
		})
	}

	handleOnClickRemove = key => {
		this.props.onRemoveTodo(key);
	};

	render() {
		return (
			<TodoWrapper>
				{this.state.editingTodo ? (
					<div>
						<EditingTodo type="text" onSubmit={this.handleOnSubmitChange} />
					</div>
				) : (
					<div>
						<Todo
							className={`todo${this.props.todoCompletion ? " completed" : ""}`}
							onClick={() => this.handleOnClickTodo(this.props.todoKey)}
						>
							{this.props.todoText}
						</Todo>
						<RemoveTodo
							onClick={() => this.handleOnClickRemove(this.props.todoKey)}
						>
							Remove
						</RemoveTodo>
						<EditTodo onClick={() => {this.handleOnClickEdit(this.props.todoKey)}}>Edit</EditTodo>
					</div>
				)}
			</TodoWrapper>
		);
	}
}

TodoComponent.propTypes = {
	// Values
	todoText: PropTypes.string.isRequired,
	todoKey: PropTypes.number.isRequired,
	todoCompletion: PropTypes.bool.isRequired,
	// Functions
	onCompleteTodo: PropTypes.func,
	onRemoveTodo: PropTypes.func
};

export default TodoComponent;
