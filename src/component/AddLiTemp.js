import React from 'react';


class AddLi extends React.Component {

	constructor() {
		super();
		console.log(this);
		this.onClickAddButtonFn = this.onClickAddButton.bind(this);
	}

	onClickAddButton() {
		console.log('input text: ', this.inputBox.value);
		this.props.handleAddedData(this.inputBox.value); //parent에게 보내기
	}

	render() {
		return (
			<div className="input-group input-group-lg">
				<input ref={input => { this.inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
				<span className="input-group-btn">
					<button onClick={this.onClickAddButtonFn} className="btn btn-primary" type="button">등록</button>
				</span>
			</div>
		);
	}
}

export default AddLi;