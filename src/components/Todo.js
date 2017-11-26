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
	font-size: 18px;
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

const TodoEditor = styled.input`
	width: 100%;
	border: 0;
	padding: 20px;
	font-size: 18px;
	font-family: 'Lato', sans-serif;
`;

class TodoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editingTodo: false,
			currentEditText: ""
		};
	}

	handleOnClickTodo = key => {
		this.props.onCompleteTodo(key);
	};

	// Todo editing

	handleOnClickEdit = () => {
		this.setState({
			editingTodo: true
		});
	};

	updateCurrentEditText = event => {
		event.preventDefault();
		this.setState({ currentEditText: event.target.value });
	};

	handleOnSubmitChange = key => {
		this.setState({
			editingTodo: false
		});
	};

	// Todo removal

	handleOnClickRemove = key => {
		this.props.onRemoveTodo(key);
	};

	componentDidMount = () => {
		this.setState({
			currentEditText: this.props.todoText
		});
	};

	render() {
		return (
			<TodoWrapper>
				{this.state.editingTodo ? (
					<div>
						<TodoEditor
							value={this.state.currentEditText}
							type="text"
							onChange={this.updateCurrentEditText}
							onSubmit={this.handleOnSubmitChange}
							autoFocus
						/>
					</div>
				) : (
					<div>
						<Todo
							className={`todo${this.props.todoCompletion ? " completed" : ""}`}
							onClick={() => this.handleOnClickTodo()}
						>
							{this.props.todoText}
						</Todo>
						<RemoveTodo
							onClick={() => this.handleOnClickRemove(this.props.todoKey)}
						>
							Remove
						</RemoveTodo>
						<EditTodo
							onClick={() => {
								this.handleOnClickEdit(this.props.todoKey);
							}}
						>
							Edit
						</EditTodo>
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
