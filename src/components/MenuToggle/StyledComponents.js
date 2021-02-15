import styled from "styled-components";

const MenuBtnStyle = styled.i`
	margin-top: 20px;
	position: fixed;
	${({open}) => {
	return open ? 'left: 320px' : 'left: 40px'
}};
	font-size: 20px;
	cursor: pointer;
	color: #fff;
	transition: opacity, left .22s ease-in;
	z-index: 100;
	
	:hover {
	opacity: .7;
	}
`

export default MenuBtnStyle