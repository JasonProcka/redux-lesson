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
	display: inline-block;
	width: 100%;
	border: 0;
	padding: 20px;
	font-size: 18px;
	font-family: "Lato", sans-serif;
	box-sizing: border-box;
`;

class TodoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editingTodo: false,
			editorValue: ''
		};
	}

	componentDidMount = () => {
		this.setState({ editorValue: this.props.todoText })
	}

	// Todo completion

	handleOnClickTodo = key => {
		this.props.onCompleteTodo(key);
	};

	// Todo editing

	handleOnClickEdit = () => {
		this.setState({
			editingTodo: true
		});
	};

	updateEditorValue = event => {
		event.preventDefault();
		this.setState({ editorValue: event.target.value });
	};

	handleOnSubmitChange = (key, text) => {
		if (text) {
			this.props.onUpdateTodo(key, text)
			this.setState({
				editingTodo: false
			});
		}
	};

	// Todo removal

	handleOnClickRemove = key => {
		this.props.onRemoveTodo(key);
	};

	render() {
		return (
			<TodoWrapper>
				{this.state.editingTodo ? (
					<form
						onSubmit={e => {
							e.preventDefault();
							this.handleOnSubmitChange(
								this.props.todoKey,
								this.state.editorValue
							);
						}}
					>
						<TodoEditor
							value={this.state.editorValue}
							type="text"
							onChange={this.updateEditorValue}
							onSubmit={this.handleOnSubmitChange}
							autoFocus
						/>
						<button>Save</button>
					</form>
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
