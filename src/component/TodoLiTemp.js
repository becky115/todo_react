import React, {Component} from 'react';



// const TodoLi2 = [];
//
// for(let i=0; i<todos.length; i++) {
// 	TodoLi2.push(
// 		<li key={i}>
// 			<span>{todos[i]}</span>
// 			<span className="btn-container"><a href="#">삭제</a></span>
// 		</li>
// 	);
// }



class TodoLi extends Component {

	constructor() {
		super();
		this.onClickRemoveButtonFn = this.onClickRemoveButton.bind(this);
	}

	onClickRemoveButton() {
		console.log(this.props)
		console.log(this.props.todo);
		this.props.handleRemoveData();
	}

	render() {

		return (
			<li>
				<span>{this.props.todo}</span>
				<span className="btn-container">
					<a href="#" onClick={this.onClickRemoveButtonFn}>삭제</a>
				</span>
			</li>
		);
	}
}

export default TodoLi;
