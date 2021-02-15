import styled from "styled-components";

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

const QuestionStyle = styled.p`
		margin: 10px 0;
`

export {
	DivStyle ,
	QuestionUl ,
	CounterQuestionStyle,
	QuestionStyle
}