import React , {useState , useEffect} from 'react';
import styled from "styled-components";

const LiStyle = styled.li`
	list-style: none;
	margin-top: 10px;
	margin-left: 20px;
	cursor: pointer;
	${({ticketMarker}) => {
	return ticketMarker ? 'color: red' : 'color: black'
}}
`

const TicketItem = ({index , onUpdate , active , onActive}) => {
	const [ticketMarker , setTicketMarker] = useState(false)

	useEffect(() => {
		setTicketMarker(active)
	} , [active])

	const onClick = () => {
		onActive()
		onUpdate()
	}

	return (
		<LiStyle
			ticketMarker={ticketMarker}
			onClick={onClick}
		>
			Ticket {index + 1}
		</LiStyle>
	)
}

export default TicketItem;