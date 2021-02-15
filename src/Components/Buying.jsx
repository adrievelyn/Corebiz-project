import React from 'react'
import Count from './Count'
import BuyingCss from './../styles/Buying.css'

class Button extends React.Component{
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
			<div className='buying'>
				<button className='buying_button' type='button' onClick={this.handleClick}>Comprar</button>
			</div>

		)
	};
} 


export default Button;