import React from 'react'
import BannerCss from '../styles/Banner.css'
import CoreInfo from '../Statics/corebiz.jpg'



class Banner extends React.Component{
	render(){
		return(
			<div  className='CoreInfo'>
				<img className='Coreinfo__img' alt='CoreInfo'
				src={CoreInfo} />
			</div>
		)
	}
}


export default Banner;