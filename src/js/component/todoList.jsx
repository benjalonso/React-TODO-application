import React, { useState, useRef } from "react";

const Todo = () => {
	const [inputValue, setInputValue] = useState("");
	const [todo, setTodo] = useState([]);
	const [deleteButton, setDeleteButton] = useState("hideDelete");

	const hideXButton = () => {
		setTimeout(() => {
			setDeleteButton("showDelete");
		}, 0);
		return setTimeout(() => {
			setDeleteButton("hideDelete");
		}, 1000);
	};
	const validateInput = (e) => {
		if (inputValue !== "" && e.keyCode === 13) {
			setTodo([...todo, inputValue]);
			setInputValue("");
			alert("You can do it!");
		} else if (inputValue === "" && e.keyCode === 13) {
			alert("Always you can do something new!");
		}
	};
	const deleteTodo = (index) => {
		setTodo((prevState) =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div>
			<div className=" titlePaper container  bg-warning">
				<h1 className="title">Todo's List</h1>
			</div>
			<div className="container cajaTodo">
				<input
					className="todoInput"
					placeholder="What has to be done today?"
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyUp={validateInput}
					value={inputValue}
				/>

				<ul className="todoList">
					{todo.map((value, index) => {
						return (
							<li
								onMouseOver={hideXButton}
								className="list"
								key={index}>
								{value}
								<button
									onClick={() => {
										deleteTodo(value);
									}}
									className={deleteButton}>
									X
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Todo;
