import Carrusel from '../components/Carrusel'
import categoria1 from '../images/Categoria1.png'
import categoria2 from '../images/Categoria2.png'
import categoria3 from '../images/Categoria3.png'
import categoria4 from '../images/Categoria4.png'
import categoria5 from '../images/Categoria5.png'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
        <Carrusel />
        <div  className='homeF centrar'>
            <div className="container-fluid">
                <div id="categorias" className="categoriasinicio mt-5">
                    <h1>CATEGORIAS</h1>
                </div>
            </div>
            <div className="container-fluid containercategorias mb-5">
                <div className="card tarjetasproductos mt-5 p-4">
                    <h3>BAÑOS</h3>
                    <img className="mt-3 mb-3" src={categoria5} alt="" />
                        <Link to="/categoria/Baño"><button className="mt-3">VER PRODUCTOS</button></Link>
                </div>
                <div className="card tarjetasproductos mt-5 p-4">
                    <h3>CARPINTERIA</h3>
                    <img className="mt-3 mb-3" src={categoria3} alt="Imagen Categoria" />
                        <Link to="/categoria/Carpintería"><button className="mt-3">VER PRODUCTOS</button></Link>
                </div>
                <div className="card tarjetasproductos mt-5 p-4">
                    <h3>COCINAS</h3>
                    <img className="mt-3 mb-3" src={categoria4} alt="" />
                        <Link to="/categoria/Cocina"><button className="mt-3">VER PRODUCTOS</button></Link>
                </div>
                <div className="card tarjetasproductos mt-5 p-4">
                    <h3>PINTURAS</h3>
                    <img className="mt-3 mb-3" src={categoria2} alt="" />
                        <Link to="/categoria/Pintura"><button className="mt-3">VER PRODUCTOS</button></Link>
                </div>
                <div className="card tarjetasproductos mt-5 p-4">
                    <h3>PISOS</h3>
                    <img className="mt-3 mb-3" src={categoria1} alt="" />
                        <Link to="/categoria/Piso"><button className="mt-3">VER PRODUCTOS</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;