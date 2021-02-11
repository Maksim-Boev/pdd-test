import React from 'react';
import styled from 'styled-components'
import MenuToggle from "../MenuToggle";

const UlStyle = styled.ul`
padding: 0;
margin: 0;
${({open}) => {
	return open ? 'left: 0' : 'left: -300px'
}};
transition: left .22s ease-in;
position: fixed;
background-color: #fff;
height: 100%;
width: 300px
`

const LiStyle = styled.li`
list-style: none;
margin-top: 10px;
margin-left: 20px;
`

const Drawer = ({isOpen, onToggle}) => {
	const links = [1, 2, 3]

	const link =
		links.map((link, index) => {
			return (
				<LiStyle key={index}>
					Ticket {link}
				</LiStyle>
			)
		})

	return (
		<div>
			<MenuToggle
				onToggle={onToggle}
				isOpen={isOpen}/>
			<UlStyle open={isOpen}>
				{link}
			</UlStyle>
		</div>
	);
};

export default Drawer;