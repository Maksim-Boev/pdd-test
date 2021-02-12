import React , {useState} from 'react';
import styled from 'styled-components'
import MenuToggle from "../MenuToggle";
import Backdrop from "../Backdrop";

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
	width: 300px;
	z-index: 1
`

const LiStyle = styled.li`
	list-style: none;
	margin-top: 10px;
	margin-left: 20px;
`

const Drawer = ({isOpen , onToggle , updateTicket}) => {
	const links = [1 , 2 , 3]

	const [ticket , setTicket] = useState(0)

	updateTicket(ticket)

	const link =
		links.map((link , index) => {
			const onClick = () => {
				setTicket(index)
			}
			return (
				<LiStyle
					key={index}
					onClick={onClick}
				>
					Ticket {link}
				</LiStyle>
			)
		})

	return (
		<React.Fragment>
			<div>
				<MenuToggle
					onToggle={onToggle}
					isOpen={isOpen}/>
				<UlStyle open={isOpen}>
					{link}
				</UlStyle>
			</div>
			{isOpen && <Backdrop onClose={onToggle}/>}
		</React.Fragment>
	);
};

export default Drawer;