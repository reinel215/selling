import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Route, Switch,BrowserRouter,Link,Redirect } from "react-router-dom";


import IngresarProducto from './IngresarProducto';
import MuestraProductos from './MuestraProductos'
import Paginacion from './Paginacion';
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import Menu from './menu/Menu';
import Categoria from './menu/Categoria';




//iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faExclamation} from '@fortawesome/free-solid-svg-icons'




const containerEstilo={
    maxWidth: "100%"
}


class Principal extends Component {

    render(){

        return(
                    <div className="container" style={containerEstilo}>
                        <BrowserRouter>  
                        <Navbar/>






                        {/*menu lateral con las 3 categorias*/}
                        <Menu>
                            <Link to="/inicio/pagina/1">
                                <Categoria height="25" width="60" color="#d66c6493" colorA="#f33629ad" mensaje=" HOME">
                                    <FontAwesomeIcon icon={faHome}/>
                                </Categoria>
                            </Link>

                            <Categoria height="25" width="60" color="#3ec03e75" colorA="#3ec03e" mensaje=" FACEBOOK" alturaExpandido="60" anchuraExpandido="140">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </Categoria>

                            <Categoria height="25" width="60" color="#3e95e69d" colorA="#3e95e6" mensaje=" INFORMACION" alturaExpandido="60" anchuraExpandido="150">
                                <FontAwesomeIcon icon={faExclamation}/>
                            </Categoria>
                        </Menu>










                            <Switch>
                                <Redirect  exact from="/" to="/inicio/pagina/1"/>


                                <Route 
                                path="/inicio/pagina/:pagina" 
                                exact
                                render={(props)=><MuestraProductos {...props} />}
                                />




                                <Route 
                                exact
                                path="/ingresar_producto" 
                                render={()=><IngresarProducto titulo="Ingrese su producto..." ancho="20rem"/>
                                }/>


                            </Switch>
                            <Paginacion/>
                            <Link to="/inicio/pagina/1"><button>HOME</button></Link>
                            <Link to="/ingresar_producto"><button>ingresar producto</button></Link>
                        </BrowserRouter>
                        <Footer/>
                    </div>
        )
    }
}

export default Principal;