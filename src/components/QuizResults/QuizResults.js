import React , {useState , useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/actions";
import {IconStyle , ListStyle} from "./StyledComponents";

const QuizResults = ({resultQuestion , resetResult}) => {

	const counterTrueQuestion = () => {
		let count = 0
		resultQuestion.forEach((item) => {
				if (item.result) {
					count = count + 1
				}
			}
		)
		return count
	}

	const [wrongAns , setWrongAns] = useState(0)

	useEffect(() => {
		resultQuestion.forEach(({result}) => {
			result === false && setWrongAns(wrongAns=>wrongAns +1)
		})
	} , [])

	console.log(wrongAns)

	const result = resultQuestion.map(({id , question , result}) => {
		return (
			<ListStyle
				key={id}
			>
				{id}. {question}
				<IconStyle
					result={+result}
					className={result ? 'fa fa-check' : 'fa fa-times'}/>
			</ListStyle>
		)
	})

	return (
		<div>
			{wrongAns > 2 ? <h1>Вы не прошли тест</h1> : <h1>Поздравляем, вы прошли тест</h1>}
			<br/>
			<ul style={{'padding': '0'}}>
				{result}
			</ul>
			<p>Правильно {counterTrueQuestion()} из {resultQuestion.length}</p>
			<button
				onClick={resetResult}
			>Повторить
			</button>
		</div>
	);
};

const mapStateToProps = ({resultQuestion}) => {
	return {
		resultQuestion
	}
}

const mapDispatchToProps = (dispatch) => {
	const {resetResult} = bindActionCreators(actions , dispatch)
	return {
		resetResult
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(QuizResults);