import React from 'react'
import Header from "../Components/Header";
import Banner from '../Components/Banner.jsx'

class Page extends React.Component{
	render(){
		return(
			<div>
				<div>
					console.log('Hola Mundo')
				</div>
				<Header />
				<Banner />
			</div>
		)
	}
}


export default Page;