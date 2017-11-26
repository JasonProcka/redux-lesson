import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
// Actions
import { updateTodo } from "../actions/index";
import { removeTodo } from "../actions/index";
import { completeTodo } from "../actions/index";

class TodoList extends Component {
	handleOnUpdateTodo = (key, text) => {
		this.props.dispatch(updateTodo(key, text));
	};

	handleOnRemoveTodo = key => {
		this.props.dispatch(removeTodo(key));
	};

	handleOnCompleteTodo = key => {
		this.props.dispatch(completeTodo(key));
	};

	render() {
		return (
			<div>
				<ul style={{ margin: 0, marginTop: 20, padding: 0 }}>
					{this.props.todos
						.map(todo => (
							<li
								key={todo.key}
								style={{ marginBottom: 15, listStyle: "none" }}
							>
								<Todo
									todoText={todo.text}
									todoKey={todo.key}
									todoCompletion={todo.completed}
									onUpdateTodo={this.handleOnUpdateTodo}
									onCompleteTodo={this.handleOnCompleteTodo}
									onRemoveTodo={this.handleOnRemoveTodo}
								/>
							</li>
						))
						.reverse()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(mapStateToProps, null)(TodoList); // mapDispatchToProps isn't necessary, as passing nothing returns the default dispatch function, with no args

// <TodoListComponent
// 	todos={this.props.todos}
// 	onRemoveTodo={this.handleOnRemoveTodo}
// 	onCompleteTodo={this.handleOnCompleteTodo}
// />
