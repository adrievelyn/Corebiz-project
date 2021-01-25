import React from 'react'
import HeaderCss from '../styles/Header.css'
import Logo from '../Statics/statics_logo.png'
import Searching from '../Statics/statics_search.png'
import Account from '../Statics/statics_account.png'
import Shopping from '../Statics/statics_shopping-cart.png'



class Header extends React.Component{
	render(){
		return (
		<div  className='Header'>
			<div  className='Header__img'>
				<img className='Header__img--logo' alt='Logo'
				src={Logo} />
			</div>
			<div class="main">
   				 <h2 class="main__title">O que está procurando?</h2>
    			 <input class="input" type="text" placeholder=""></input>
    			 <img className='main__search' alt='Buscador'
				src={Searching} />
				<img className='main__account' alt='TuCuenta'
				src={Account} />
				<img className='main__account' alt='Carrito'
				src={Shopping} />

			</div>
		</div>
		)
	};
}

export default Header;