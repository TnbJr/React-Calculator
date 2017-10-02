import * as types from '../actions/actionTypes'

export default function calculatorReducer(state={question: "0", answer: "", memoryValue: "0"}, action){
	switch(action.type){
		case types.EVALUATE:
			return Object.assign({}, state, {
				question: "0",
				answer: action.answer
			})
		case types.BUTTON_CLICKED:
			return Object.assign({}, state, {
				question: state.question === '0' ? String(action.value) : state.question + action.value
			})
		case types.CLEAR_ALL:
			return Object.assign({}, state, {
				question: "0",
				answer: ""
			})
		case types.DELETE:
			return Object.assign({}, state, {
				question: state.question.substring(0, state.question.length - 1) || '0',
			})
		case types.MEMORY_STORAGE:
			return Object.assign({}, state, {
				memoryValue: state.answer !== '0' ? state.answer : '0'
			})
		case types.MEMORY_RET:
			return Object.assign({}, state, {
				question: state.memoryValue === '0' ? '0' :  state.question === '0' ? state.memoryValue : state.question + state.memoryValue
			})
		case types.MEMORY_CLEAR:
			return Object.assign({}, state, {
				memoryValue: "0"
			})
		case types.ERROR:
			return Object.assign({}, state, {
				answer: "ERROR"
			})

		default:
			return state
	}
}