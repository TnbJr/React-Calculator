import React from 'react'
import '../styles/style.css'
import { connect } from 'react-redux'
import { buttonClicked, equalClicked, clearValue, deleteLastValue, memoryStorage, memoryRet, memoryClear, handleError} from '../actions/index'
import { bindActionCreators } from 'redux'
import Button from '../components/Button'
import buttonsList from '../data//buttons'


class Frame extends React.Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(value){
		try{
			switch(value){
				case '=':{
					const answer = eval(this.props.question).toString()
					return this.props.equalClicked(answer)
				}
				case 'delete':
					return this.props.deleteLastValue()
				case 'clear':
					return this.props.clearValue()
				case 'MR':
					return this.props.memoryRet()
				case 'MS':
					return this.props.memoryStorage()
				case 'MC':
					return this.props.memoryClear()
				default:{
					return this.props.buttonClicked(value)
				}
			}
		}catch(e){
			console.error(e)
			return this.props.handleError()
		}
	}

	renderButtons(btn){
		const buttons = btn.map((btn, i)=>{
			return <Button key={i} value={btn.value} className={btn.className} onClickHandler={this.handleClick}/>
		})
		return buttons
	}

	render(){
		const buttons = this.renderButtons(buttonsList)
		return(
			<div className="row col-xs-offset-4" id="frame">
				<input value={this.props.answer} type="text" className="col-xs-12" readOnly/>
				<input value={this.props.question} type="text" className="col-xs-12" readOnly/>
				{buttons}
	
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		question: state.calculator.question,
		answer: state.calculator.answer,
		memoryValue: state.calculator.memoryValue
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(
		{
			buttonClicked,
			equalClicked,
			clearValue,
			deleteLastValue,
			memoryStorage,
			memoryRet,
			memoryClear,
			handleError
		}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)