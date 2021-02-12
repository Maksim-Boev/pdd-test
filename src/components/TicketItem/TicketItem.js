import React , {useState} from 'react';
import styled from "styled-components";

const LiStyle = styled.li`
	list-style: none;
	margin-top: 10px;
	margin-left: 20px;
	${({ticketMarker}) => {
	return ticketMarker ? 'color: green' : 'color: red'
}}
`

const TicketItem = ({index , onUpdate}) => {
	const [ticketMarker , setTicketMarker] = useState(false)

	const onClick = () => {
		onUpdate()
		setTicketMarker(!ticketMarker)
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