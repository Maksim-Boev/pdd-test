import React, {useState,} from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../actions/actions'

const LiStyle = styled.li`
list-style: none;
padding: 10px 20px;
margin-bottom: 5px;
border: 1px solid #fff;
border-radius: 5px;
cursor: pointer;
${({trueAnswer}) => {
	if (trueAnswer === '') {
		return
	}
	return trueAnswer ? 'background-color: rgb(49 63 246 / 50%)' : 'background-color: rgb(233 30 99 / 50%)'
}};

:hover {
background: rgba(255, 255, 255, .2);
transition: background .3s ease-in-out;
}
`

const Answer = ({
									question, idQuestion, answer,
									id, rightAnswer, inc, count,
									lengthQuiz, correctAnswer, wrongAnswer
}) => {

	let [markerAnswer, setMarkerAnswer] = useState('')

	const rightAns = rightAnswer === id
	const timeoutResetMarkerAnswer = (t) => {
		setTimeout(() => {
			setMarkerAnswer('')
			count <= lengthQuiz && inc()
		}, t)
	}

	const QuestionFromResult = {
		idQuestion,
		question
	}

	const onAnswerClick = () => {
		if (rightAns) {
			if (markerAnswer || markerAnswer === false) {
				return
			}
			setMarkerAnswer(true)
			correctAnswer(QuestionFromResult)
			timeoutResetMarkerAnswer(1000)
			clearTimeout(timeoutResetMarkerAnswer)
		} else {
			if (markerAnswer || markerAnswer === false) {
				return
			}
			setMarkerAnswer(false)
			wrongAnswer(QuestionFromResult)
			timeoutResetMarkerAnswer(1000)
			clearTimeout(timeoutResetMarkerAnswer)
		}
	}

	return (
		<>
			<LiStyle
				trueAnswer={markerAnswer}
				onClick={onAnswerClick}>
				{answer}
			</LiStyle>
		</>
	);
};

const mapStateToProps = ({count}) => {
	return {
		count
	}
}

const mapDispatchToProps = (dispatch) => {
	const {inc, correctAnswer, resetResult, wrongAnswer} = bindActionCreators(actions, dispatch)
	return {
		inc,
		correctAnswer,
		wrongAnswer,
		resetResult
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);