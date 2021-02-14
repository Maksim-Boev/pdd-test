import React from 'react';
import styled from 'styled-components'

const BackdropStyle = styled.div`
		background: rgba(0,0,0,.7);
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
`

const Backdrop = ({onClose}) => {
	return (
		<div>
			<BackdropStyle onClick={onClose}/>
		</div>
	);
};

export default Backdrop;