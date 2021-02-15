export const resetResult = () => ({ type: 'RESET_RESULT' });
export const correctAnswer = (payload) => ({ type: 'CORRECT_ANSWER', payload });
export const wrongAnswer = (payload) => ({ type: 'WRONG_ANSWER', payload });
export const inc = () => ({ type: 'INC' });
