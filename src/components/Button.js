import React from 'react'

export default (props) => {
	return(
		<div className={props.className} onClick={(e)=>{props.onClickHandler(props.value)}}>
			{props.value}
		</div>
	)
}