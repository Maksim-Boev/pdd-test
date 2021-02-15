import styled from "styled-components";

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

export default LiStyle