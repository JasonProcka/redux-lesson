import React, { Component } from 'react'

class AddTodo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: ''
		}
	}

	handleOnChange(event) {
		this.setState({ value: event.target.value })
	}

	handleOnClick(event) {
		event.preventDefault()

		this.props.onAddTodo(this.state.value)
	}

	render() {
		return (
			<form>
				<input type="text" onChange={this.handleOnChange.bind(this)} value={this.state.value} placeholder="Write your todo..." />
				<button onClick={this.handleOnClick.bind(this)}>Add</button>
			</form>
		)		
	}

	
}

export default AddTodo