import React , {useState , useEffect} from 'react'
import {connect} from 'react-redux'
import styled from "styled-components"

import Question from "./components/Question";
import AnswerList from "./components/AnswerList";
import QuizResults from "./components/QuizResults";
import Timer from "./components/Timer";
import Drawer from "./components/Drawer";
import {getTicket} from "./components/service/service";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(90deg, #5041d2 0%, #7969e6 100%);
  height: 100vh;
	padding: 0 100px;
    `

const Title = styled.h1`
	margin-top: 50px;
	color: #fff;
`

const QuizTable = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 2px solid;
	border-radius: 5px;
	color: #fff;
`

const App = ({count}) => {

	const [toggle , setToggle] = useState(false)
	const [ticket , setTicket] = useState(0)
	const [que , setQue] = useState([])

	const onToggle = () => {
		setToggle(!toggle)
	}

	useEffect(() => {
		getTicket()
			.then((data) => {
				setQue(data[ticket].questions)
			})
		return setQue([])
	} , [ticket])

	console.log(que)

	const updateTicket = (value) => {
		setTicket(value)
	}

	console.log(ticket)

	return (
		<React.Fragment>
			<Container>
				<Drawer
					onToggle={onToggle}
					isOpen={toggle}
					updateTicket={updateTicket}/>
				<Title>
					<Timer/>
					Ответьте на вопрос
				</Title>
				<QuizTable>
					{count < 10 && <Question data={que}/>}
					{count < 10 && <AnswerList data={que}/>}
					{count >= 10 && <QuizResults/>}
				</QuizTable>
			</Container>
		</React.Fragment>
	);
}

const mapStateToProps = ({count}) => {
	return {
		count
	}
}

export default connect(mapStateToProps)(App);
