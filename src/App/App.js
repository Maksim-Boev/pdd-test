import React , {useState , useEffect} from 'react'
import {connect} from 'react-redux'

import Question from "../components/Question";
import AnswerList from "../components/AnswerList";
import QuizResults from "../components/QuizResults";
import Timer from "../components/Timer";
import Drawer from "../components/Drawer";
import {getTicket} from "../components/service/service";
import StartBtn from "../components/StartBtn";
import {bindActionCreators} from "redux";
import * as actions from "../components/actions/actions";
import {Container , QuizTable , Title} from "./StyledComponents";

const App = ({count , resetResult}) => {

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
		(async function () {
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
								{count >= 10 ? 'Ваш результат' : 'Ответьте на вопрос'}
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

export default connect(mapStateToProps , mapDispatchToProps)(App);
