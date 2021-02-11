import React, {useState} from 'react'
import {connect} from 'react-redux'
import styled from "styled-components"

import Question from "./components/Question";
import AnswerList from "./components/AnswerList";
import QuizResults from "./components/QuizResults";
import Timer from "./components/Timer";
import Drawer from "./components/Drawer";

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

	const [toggle, setToggle] = useState(false)

	const onToggle = () => {
		setToggle(!toggle)
	}

	return (
		<React.Fragment>
			<Container>
				<Drawer
					onToggle={onToggle}
					isOpen={toggle}/>
				<Title>
					<Timer/>
					Ответьте на вопрос
				</Title>
				<QuizTable>
					{count < 10 && <Question/>}
					{count < 10 && <AnswerList/>}
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
