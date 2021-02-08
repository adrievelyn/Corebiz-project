
# Prueba API React
[![N|Solid](https://mitocondria.cl/wp-content/uploads/2021/01/logo-corebiz-preto-cinza.png)](https://mitocondria.cl/corebiz-cl/)

Prueba Frontend con API Rest Corebiz Chile.

# Instrucciones:

  - Deberás montar un homepage de tienda en línea, el diseño se encuentra en el archivo example.jpg.
  - Los estáticos los podrás encontrar en la carpeta statics.
  - Debes utilizar React como Framework JS, las formas de programar son libres, sólo queremos saber cómo llegas al objetivo.
  - Si no sabes hacer algo en particular, sáltalo, pero no sientas paresión a hacer el 100% del diseño.
  - Debes utilizar contenidos dinámicos obtenidos por API.
  - De la API se obtienen sólo el listado de productos el resto de contenidos estáticos los debes generar o descargar.
  - Mostrar la información que se obtiene del producto, como por ej: Título producto, SKU, Imagen, Precio, etc.

# Funcionalidades:

  - Añadir al carro, debe ser un botón clickeable.
  - Al presionar Añadir al carro se debe agregar al minicart, con una animación simple y modificar el número de items (Totales).
  - El minicart debe ser un desplegable, que al hacer hover muestre los productos que tengas en el carro y que al quitar el hover desaparezca el desplegable.
  - El minicart debe tener un contador con todos los productos que has añadido (número bajo el icono de carro).

# Entregables:

  - Debes enviar la URL de git con tu repositorio, en él deben estar todos los archivos necesarios para poder montar la app.

# API

  - GET productos:
```sh
https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products
```
  - GET Producto by ID:
```sh
https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products/:id
```

\+ Info [Corebiz Chile](https://mitocondria.cl/corebiz-cl/)

License
----

Corebiz


**Happy Coding!**








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


CONTENIDO DEL COMPONENTE CONTENT - CAROUSEL

<!--lass Content extends React.Component{
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
}*/-->