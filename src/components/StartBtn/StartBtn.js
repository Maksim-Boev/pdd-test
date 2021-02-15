import React from 'react';
import StartBtnStyle from "./StyledComponents";

const StartBtn = ({start = false , onClick , ticket}) => {
	return (
		ticket === null
			? <React.Fragment/>
			: <StartBtnStyle
				onClick={onClick}>
				{start ? 'End test' : 'Start test'}
			</StartBtnStyle>
	);
};

export default StartBtn;