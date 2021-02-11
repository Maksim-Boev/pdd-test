export const initialState = {
	count: 0,
	resultQuestion: []
}

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case 'INC' :
			return {
				...state,
				count: state.count + 1
			}
		case 'CORRECT_ANSWER' :
			return {
				...state,
				resultQuestion: [
					...state.resultQuestion,
					{
						id: action.payload.idQuestion,
						question: action.payload.question,
						result: true
					}
				]
			}
		case 'WRONG_ANSWER' :
			return {
				...state,
				resultQuestion:[
					...state.resultQuestion,
					{
						id: action.payload.idQuestion,
						question: action.payload.question,
						result: false
					}
				]
			}
		case 'RESET_RESULT' :
			return {
				count: 0,
				resultQuestion: []
			}
		default:
			return state
	}
}

export default reducer