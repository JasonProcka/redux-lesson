import React, { Component } from "react";
import AddTodoComponent from "../components/AddTodo";
import { connect } from 'react-redux'
// Actions
import { addTodo } from '../actions/index'
 
class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.handleOnAddTodo = this.handleOnAddTodo.bind(this)
	}

	handleOnAddTodo(val) {
		this.props.dispatch(addTodo(val))
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}

	render() {
		return (
			<div>
				<AddTodoComponent onAddTodo={this.handleOnAddTodo} />
				{ this.props.todos.map((object, key) => {
					return <li key={key}>{object.text}</li>
				}) }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { todos: state.todos }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, null)(AddTodo);
