import React from 'react'
import FooterCss from '../styles/Footer.css'
import Mail from '../Statics/statics_mail.png'
import Consultor from '../Statics/statics_heatset.png'
import Created from '../Statics/statics_logo_alt.png'
import Vtex from '../Statics/statics_vtex.png'




class Footer extends React.Component{
	render(){
		return(
			<footer class='footer'>
		<div className='footer_localization'>
			<h4>Localização</h4>
			<p>Avenida Andromeda, 2000</p>
			<p>brasil@corebiz.ag</p>
			<p>+55 11 30901039</p>
		</div>
		<div className='footer__contact'>
		<div className='footer__contact--ContactUs'>
			<img  alt='Mail' src={Mail} />
			<a href="/" alt=''>ENTRE EN CONTATO</a>
		</div>
		<div className='footer__contact--Consultor'>
			<img  alt='ConsultorOnLine' src={Consultor} />
			<a href="/" alt=''>FALE CON O NOSSO CONSULTOR ONLINE</a>
		</div>
		</div>
		<div className='footer__company'>
			<div class='footer__company--created'>
			<p>Created by</p>
			<img className='Created' alt='CreatedByCorebiz' src={Created} />
			</div>
			<div class='footer__company--powered'>
			<p>Powered by</p>
			<img className='Vtex' alt='Vtex' src={Vtex} />
			</div>
		</div>
	</footer>
		)
	}
}


export default Footer;