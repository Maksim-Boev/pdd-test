import React from 'react'
import Answer from "../Answer";
import {connect} from 'react-redux';

const AnswerList = ({count , data}) => {

	const dataWithCount = data.length !== 0 && data[count]

	const question = dataWithCount.que_title
	const idQuestion = dataWithCount.idQuestion
	const rightAnswer = dataWithCount.rightAnswer
	const que_answers = dataWithCount.que_answers

	let answer = que_answers && que_answers.map(({answer , id}) => {

		return (
			<Answer
				id={id}
				idQuestion={idQuestion}
				key={id}
				lengthQuiz={data.length}
				question={question}
				answer={answer}
				rightAnswer={rightAnswer}/>
		)
	})


	return (
		<React.Fragment>
			{answer}
		</React.Fragment>
	)
}

const mapStateToProps = ({count , resultQuestion}) => {
	return {
		count ,
		resultQuestion
	}
}

export default connect(mapStateToProps)(AnswerList);