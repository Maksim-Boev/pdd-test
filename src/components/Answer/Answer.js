import React , {useState} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../actions/actions'
import LiStyle from "./StyledComponent";

const Answer = ({
									question , idQuestion , answer ,
									id , rightAnswer , inc , count ,
									lengthQuiz , correctAnswer , wrongAnswer , onPressing , pressing
								}) => {

	let [markerAnswer , setMarkerAnswer] = useState('')

	const rightAns = rightAnswer === id
	const timeoutResetMarkerAnswer = (t) => {
		setTimeout(() => {
			onPressing(false)
			setMarkerAnswer('')
			count <= lengthQuiz && inc()
		} , t)
	}

	const QuestionFromResult = {
		idQuestion ,
		question
	}

	const onAnswerClick = () => {
		onPressing(true)
		if (pressing === false) {
			if (rightAns) {
				setMarkerAnswer(true)
				correctAnswer(QuestionFromResult)
				timeoutResetMarkerAnswer(5000)
				clearTimeout(timeoutResetMarkerAnswer)
			} else {
				setMarkerAnswer(false)
				wrongAnswer(QuestionFromResult)
				timeoutResetMarkerAnswer(5000)
				clearTimeout(timeoutResetMarkerAnswer)
			}
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
	const {inc , correctAnswer , wrongAnswer} = bindActionCreators(actions , dispatch)
	return {
		inc ,
		correctAnswer ,
		wrongAnswer
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(Answer);