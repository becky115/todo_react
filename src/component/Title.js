import React from 'react';
import ProtoTypes from 'prop-types';

const Title  = (props) => {
	return (
		<div className="page-header">
			<h1>{props.text}</h1>
		</div>
	);
};

Title.propTypes = {
	text: ProtoTypes.number
};

export default Title;
