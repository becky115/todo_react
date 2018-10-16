import React from 'react';
import AddLi from '../component/AddLi';
import Title from '../component/Title';
import TodoLi from '../component/TodoLi';


class Todo extends React.Component {
	constructor() {
		super();
		console.log("constructor");
		this.state = {
			text: '',
			todos: [

			],
		};

		this.handleAddedDataFn = this.handleAddedData.bind(this);
		this.handleRemoveDataFn = this.handleRemoveData.bind(this);
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
		/*
			axios.get("/todo")
				.done((data) => data = data)
				.fail();
			data.text
			data.todos
		*/
		const text = 'To do list';
		const todos = [
			"이것도 해야 되고",
			"저것도 해야 되고",
			"그것도 해야 되고",
			"언제 다 하나"
		];

		//debugger;

		this.setState((prevState) => {
			return {
				text,
				todos
			}
		});

	}

	componentWillReceiveProps() { //17>= deprecated
		console.log('componentWillReceiveProps');
	}

	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	handleAddedData(todo) {
		this.setState((prevState) => {
			const todos = prevState.todos;
			todos.push(todo);

			return {
				todos
			};
		});
	}

	handleRemoveData(index) {
		console.log(index);
		this.setState((prevState) => {
			const todos = prevState.todos;
			//const newTodos = todos.slice(0, index).concat(todos.slice(index + 1, todos.length));
			//console.log(newTodos);

			todos.splice(index, 1);//1개만 제거

			return {
				todos
			};
		});


	}

	render() {
		console.log('======= render =======');
		const todoLi = this.state.todos.map((todo, index) => {
			return (
				<TodoLi todo={todo} key={"todo" + index} handleRemoveData={() => {this.handleRemoveDataFn(index)}}/>
			)
		});

		return (
			<div className="container">
				<Title text={this.state.text}/>
				<AddLi handleAddedData={this.handleAddedDataFn}/>
				<hr/>
				<ul>
					{todoLi}
				</ul>
			</div>
		);
	}

}

export default Todo;