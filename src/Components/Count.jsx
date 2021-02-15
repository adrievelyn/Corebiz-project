import React from 'react'

class Count extends React.Component{
	state  = {
		count: 0,	
	}
	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	render(){
		const {count} = this.state;
		return(
			<div>
				<h5>{count}</h5>
			</div>

		)
	};
} 


export default Count;