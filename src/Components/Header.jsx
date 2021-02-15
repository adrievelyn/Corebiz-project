import React from 'react'
import HeaderCss from '../styles/Header.css'
import Logo from '../Statics/statics_logo.png'
import Searching from '../Statics/statics_search.png'
import Account from '../Statics/statics_account.png'
import Shopping from '../Statics/statics_shopping-cart.png'
import Count from './Count'


class Header extends React.Component{

	render(){
		
		return (
		<div  className='Header'>
			<div  className='Header__img'>
				<img className='Header__img--logo' alt='Logo'
				src={Logo} />
			</div>
			<div class="main">
			
    			 <input class="input" type="text" placeholder="O que está procurando?"></input>
    			 <img className='main__search' alt='Buscador'
				src={Searching} width = '10' height='10'/>
				<div className='main__account'>
				<img className='main__account--login' alt='TuCuenta'
				src={Account} />
				<h6 className='main__account--name'>Adriana Sánchez</h6>
				
				<img className='main__shopping' alt='Carrito' src={Shopping} />
				<Count />
</div>
			</div>
				
		</div>

		)
	};
}

export default Header;