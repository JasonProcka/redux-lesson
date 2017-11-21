import React from "react";
import "../styles/todo-list.css";

const TodoList = props => {
	const handleOnClickTodo = key => {
		props.onCompleteTodo(key);
	};

	const handleOnClickRemove = key => {
		props.onRemoveTodo(key);
	};

	return (
		<div>
			<h3>Todos:</h3>
			<ul>
				{props.todos.map(todo => (
					<li key={todo.key}>
						<div className={'todo', () => {
							return 'nothing'
						}} onClick={() => handleOnClickTodo(todo.key)}>
							{todo.text}
						</div>
						<button onClick={() => handleOnClickRemove(todo.key)}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
