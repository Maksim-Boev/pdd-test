import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';
import {getTicket} from "../service/service";

const QuestionUl = styled.div`
	display: flex;
	justify-content: space-between;
`

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CounterQuestionStyle = styled.div`
min-width: 40px;
`

const Question = ({count}) => {

	const [que, setQue] = useState([])

	useEffect(() => {
		getTicket()
			.then((data) => {
				console.log(data[0])
				setQue(data[0].questions)
			})
	}, [])

	const question = que.map(({que_title}) => que_title)
	const urlImg = que.map(({urlImg}) => urlImg)

	return (
		<QuestionUl>
			<DivStyle>
				{urlImg[count] !== undefined && urlImg[count].length !== 0 && <img style={{'width': '100%'}} src={urlImg[count]} alt="img"/>}
				{question[count]}
			</DivStyle>
			<CounterQuestionStyle>
				{
					count < que.length
						? count + 1
						: que.length
				} из {que.length}
			</CounterQuestionStyle>
		</QuestionUl>
	);
};

const mapStateToProps = ({count}) => {
	return {
		count
	}
}

export default connect(mapStateToProps)(Question);