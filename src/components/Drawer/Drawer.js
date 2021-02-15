import React , {useState , useEffect } from 'react';
import MenuToggle from "../MenuToggle";
import Backdrop from "../Backdrop";
import TicketItem from "../TicketItem";
import UlStyle from "./StyledComponents";

const Drawer = ({updateTicket , dataLength}) => {

	const [ticket , setTicket] = useState(null)
	const [idActive , setIdActive] = useState(null)
	const [toggle , setToggle] = useState(false)

	useEffect(() => {
		updateTicket(ticket)
	} , [ticket])

	const onToggle = () => {
		setToggle(!toggle)
	}

	const isActive = (idActive = null , index) => {
		return idActive === index;
	}

	const link =
		dataLength.map((link , index) => {
			const onActive = () => {
				setIdActive(index)
			}
			const onUpdate = () => {
				setTicket(index)
			}
			return (
				<TicketItem
					active={isActive(idActive , index)}
					key={index}
					index={index}
					onUpdate={onUpdate}
					onActive={onActive}
				/>
			)
		})

	return (
		<React.Fragment>
			<div>
				<MenuToggle
					onToggle={onToggle}
					isOpen={toggle}/>
				<UlStyle open={toggle}>
					{link}
				</UlStyle>
			</div>
			{toggle && <Backdrop onClose={onToggle}/>}
		</React.Fragment>
	);
};

export default Drawer;