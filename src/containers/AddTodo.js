import React, { Component } from "react";
import AddTodoComponent from "../components/AddTodo";
import { connect } from "react-redux";
// Actions
import { addTodo } from "../actions/index";

class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.handleOnAddTodo = this.handleOnAddTodo.bind(this);
	}

	handleOnAddTodo(val) {
		this.props.dispatch(addTodo(val));
	}

	render() {
		return (
			<div>
				<AddTodoComponent onAddTodo={this.handleOnAddTodo} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { todos: state.todos };
};

export default connect(mapStateToProps, null)(AddTodo);