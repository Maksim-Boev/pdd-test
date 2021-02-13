import React from 'react';
import styled from 'styled-components'

const BtnStyle = styled.button`
    height: 40px;
`

const StartBtn = ({start = false , onClick , ticket}) => {
	return (
		ticket === null
			? <React.Fragment/>
			: <BtnStyle
				onClick={onClick}>
				{start ? 'End test' : 'Start test'}
			</BtnStyle>
	);
};

export default StartBtn;