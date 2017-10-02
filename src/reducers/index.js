import { combineReducers } from 'redux';
import calculatorReducer from './calculator'

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

export default rootReducer;
