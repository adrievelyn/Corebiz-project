import React from 'react'
import ContainerCss from '../styles/Container.css'


class Content extends React.Component{
	render(){
		return(

			<section class='carousel'>
			<div class='carousel__container'>
				<div className='carousel__container--sell'>
				<h3>Mais Vendidos</h3>
				</div>
				<div class='carousel-item'>
				<img class='carousel-item__img' src="./Statics/blackShoe.png" alt="Shoes" width='80' height='150'></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				<img class='carousel-item__img' src="" alt=""></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				<img class='carousel-item__img' src="" alt=""></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				<img class='carousel-item__img' src="" alt=""></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				<img class='carousel-item__img' src="" alt=""></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				<img class='carousel-item__img' src="" alt=""></img>
				<div class='carousel-item__details'>
					<div>
					<img src=""/>
					<img src=""/>
					</div>
				</div>
				<p class='carousel-item__details--title'></p>
				<p class='carousel-item__details--subtitle'></p>
				
			</div>
		</div>
	</section>
		)
	}
}


export default Content;