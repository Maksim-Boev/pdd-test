import React from 'react';
import BackdropStyle from "./StyledComponent";

const Backdrop = ({onClose}) => {
	return (
		<div>
			<BackdropStyle onClick={onClose}/>
		</div>
	);
};

export default Backdrop;