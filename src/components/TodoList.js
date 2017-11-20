import React from "react";

const TodoList = props => {
	const handleOnClickTodo = () => {
		console.log("click");
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
						<span onClick={handleOnClickTodo}>{todo.text}</span>
						<button onClick={() => handleOnClickRemove(todo.key)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
