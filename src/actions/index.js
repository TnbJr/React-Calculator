import * as types from './actionTypes';

export function buttonClicked(value) {
	return {
		type: types.BUTTON_CLICKED,
		value
	}
}

export function equalClicked(answer){
	return{
		type: types.EVALUATE,
		answer
	}
}

export function clearValue(){
	return{
		type: types.CLEAR_ALL,
	}
}

export function deleteLastValue(){
	return{
		type: types.DELETE,
	}
}

export function memoryStorage(){
	return{
		type: types.MEMORY_STORAGE
	}
}

export function memoryRet(){
	return{
		type: types.MEMORY_RET
	}
}

export function memoryClear(){
	return{
		type: types.MEMORY_CLEAR
	}
}

export function handleError(){
	return{
		type: types.ERROR
	}
}