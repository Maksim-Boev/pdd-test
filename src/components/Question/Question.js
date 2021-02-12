import React , {useState , useEffect} from 'react'
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
		min-width: 60px;
    display: flex;
    justify-content: flex-end;
`

const Question = ({count , data}) => {

	const question = data.map(({que_title}) => que_title)
	const urlImg = data.map(({urlImg}) => urlImg)

	console.log(question)

	return (
		<QuestionUl>
			<DivStyle>
				{urlImg[count] !== undefined && urlImg[count].length !== 0 &&
				<img style={{'width': '100%'}} src={urlImg[count]} alt="img"/>}
				{question[count]}
			</DivStyle>
			<CounterQuestionStyle>
				{
					count < data.length
						? count + 1
						: data.length
				} из {data.length}
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