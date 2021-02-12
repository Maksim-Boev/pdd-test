import React , {useState , useEffect} from 'react';
import styled from 'styled-components'
import MenuToggle from "../MenuToggle";
import Backdrop from "../Backdrop";
import TicketItem from "../TicketItem";

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

const Drawer = ({isOpen , onToggle , updateTicket , dataLength}) => {

	const [ticket , setTicket] = useState(0)

	useEffect(() => {
		updateTicket(ticket)
	} , [ticket])
	//},[ticket, updateTicket]) -> повтор Console.log

	const link =
		dataLength.map((link , index) => {
			const onUpdate = () => {
				console.log('onUpdate!!!!!!!!!!!!!!!!')
				setTicket(index)
			}
			return (
				<TicketItem
					key={index}
					index={index}
					onUpdate={onUpdate}
				/>
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