import React, {useState, useEffect} from 'react'
import ContainerCss from '../styles/Container.css'
import {Controller, Scene} from 'react-scrollmagic'
import { animateScroll as scroll} from 'react-scroll'


function Content(){
	const url = 'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products'
	const [todos, setTodos] = useState()
	const fetchApi = async () => {
		const response = await fetch(url)
		/*console.log(response.status)*/
		const responseJSON = await response.json()
		setTodos(responseJSON)
		/*console.log(responseJSON)*/
	}
	useEffect(() => {
		fetchApi()
	}, [] )
	return(
		<div className='Content'>
		<p>Máis Vendidos</p>
				<ul>
				{ !todos ? 'Cargando... ' : 
				todos.map( (todo, index) =>{
					return <div class='carousel-item'>
		        <img class='carousel-item__img' src={todo.img} alt="/"></img>
		        <div class='carousel-item__details'>
		          <div>
		          <li>{todo.product}</li>
		          </div>
		          <div>
		          <li className='carousel-item__cost'><p>por R$</p> {todo.price}</li>
		          </div>
		          </div>
		          </div>
				})
				}
				</ul>
		
	</div>
		)
}




export default Content;