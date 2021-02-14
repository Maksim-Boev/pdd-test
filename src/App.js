import React , {useState , useEffect} from 'react'
import {connect} from 'react-redux'
import styled from "styled-components"

import Question from "./components/Question";
import AnswerList from "./components/AnswerList";
import QuizResults from "./components/QuizResults";
import Timer from "./components/Timer";
import Drawer from "./components/Drawer";
import {getTicket} from "./components/service/service";
import StartBtn from "./components/StartBtn";
import {bindActionCreators} from "redux";
import * as actions from "./components/actions/actions";

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

const App = ({count, resetResult}) => {

	//const [toggle , setToggle] = useState(false)
	const [ticket , setTicket] = useState(null)
	const [que , setQue] = useState([])
	const [start , setStart] = useState(false)
	const [dataLength , setDataLength] = useState([])

	// const onToggle = () => {
	// 	setToggle(!toggle)
	// }

	useEffect(() => {
		let count = [];
		(async function ()  {
			await getTicket()
				.then((data) => {
					data.forEach((item , index) => {
						count.push(index)
					})
				})
			setDataLength(dataLength => [...dataLength , ...count])
		})()
	} , [])

	useEffect(() => {
		ticket != null &&
		getTicket()
			.then((data) => {
				setQue(data[ticket].questions)
			})
	} , [ticket])

	const updateTicket = (value) => {
		setTicket(value)
	}

	const onStart = () => {
		setStart(!start)
		resetResult()
	}

	console.log('App')
	console.log(ticket)
	console.log(que)

	return (
		<React.Fragment>
			<Container>
				<Drawer
					// onToggle={onToggle}
					// isOpen={toggle}
					updateTicket={updateTicket}
					dataLength={dataLength}/>

				<StartBtn
					ticket={ticket}
					start={start}
					onClick={onStart}
				/>

				{
					start && ticket != null
						? <React.Fragment>
							<Title>
								{count < 10 && <Timer/>}
								Ответьте на вопрос
							</Title>
							<QuizTable>
								{count < 10 && <Question data={que}/>}
								{count < 10 && <AnswerList data={que}/>}
								{count >= 10 && <QuizResults/>}
							</QuizTable>
						</React.Fragment>
						: <h1>Выберите билет</h1>
				}

			</Container>
		</React.Fragment>
	);
}

const mapStateToProps = ({count}) => {
	return {
		count
	}
}

const mapDispatchToProps = (dispatch) => {
	const {resetResult} = bindActionCreators(actions , dispatch)
	return {
		resetResult
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
