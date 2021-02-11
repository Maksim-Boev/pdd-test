import React, {useState, useEffect} from 'react'
import Answer from "../Answer";
import {connect} from 'react-redux';
import {getTicket} from "../service/service";

const AnswerList = ({ count}) => {
	const [que, setQue] = useState()

	const question = typeof que === "object" && que[count].que_title
	const idQuestion = typeof que === "object" && que[count].idQuestion
	const rightAnswer = typeof que === "object" && que[count].rightAnswer

	useEffect(() => {
		getTicket()
			.then((data) => {
				console.log(data[0])
				setQue(data[0].questions)
			})
	}, [])

		let answer = typeof que === "object" && que[count].que_answers.map(({answer, id,}) => {

			return (
				<Answer
					id={id}
					idQuestion={idQuestion}
					key={id}
					lengthQuiz={que.length}
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

const mapStateToProps = ({count, resultQuestion}) => {
	return {
		count,
		resultQuestion
	}
}

export default connect(mapStateToProps)(AnswerList);