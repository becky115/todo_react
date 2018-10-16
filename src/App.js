import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './containers/Todo'

if(module.hot) { //react-hot-loader
	module.hot.accept();
}


ReactDOM.render(
	<Todo/>, document.getElementById("app")
);