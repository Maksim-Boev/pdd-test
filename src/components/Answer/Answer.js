import React , {useState} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../actions/actions'
import LiStyle from "./StyledComponent";

const Answer = ({
									question , idQuestion , answer ,
									id , rightAnswer , inc , count ,
									lengthQuiz , correctAnswer , wrongAnswer
								}) => {

	let [markerAnswer , setMarkerAnswer] = useState('')

	const rightAns = rightAnswer === id
	const timeoutResetMarkerAnswer = (t) => {
		setTimeout(() => {
			setMarkerAnswer('')
			count <= lengthQuiz && inc()
		} , t)
	}

	const QuestionFromResult = {
		idQuestion ,
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
	const {inc , correctAnswer , resetResult , wrongAnswer} = bindActionCreators(actions , dispatch)
	return {
		inc ,
		correctAnswer ,
		wrongAnswer ,
		resetResult
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(Answer);