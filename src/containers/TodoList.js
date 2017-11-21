import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListComponent from "../components/TodoList";
// Actions
import { removeTodo } from "../actions/index";
import { completeTodo } from '../actions/index'

class TodoList extends Component {
	handleOnRemoveTodo(key) {
		this.props.dispatch(removeTodo(key));
	}

	handleOnCompleteTodo(key) {
		this.props.dispatch(completeTodo(key))
	}

	render() {
		return (
			<div>
				<TodoListComponent
					todos={this.props.todos}
					onRemoveTodo={this.handleOnRemoveTodo.bind(this)}
					onCompleteTodo={this.handleOnCompleteTodo.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(mapStateToProps, null)(TodoList); // mapDispatchToProps isn't necessary, as passing nothing returns the default dispatch function, with no args
