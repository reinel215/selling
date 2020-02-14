import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Route, Switch,BrowserRouter,Link,Redirect } from "react-router-dom";


import IngresarProducto from './IngresarProducto';
import Prueba from './Prueba';
import MuestraProductos from './MuestraProductos'
import Paginacion from './Paginacion';
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'


const containerEstilo={
    maxWidth: "100%"
}


class Principal extends Component {

    render(){

        return(
                    <div className="container" style={containerEstilo}>
                        <BrowserRouter>  
                        <Navbar/>
                        <Redirect from="/" to="/inicio/pagina/1"/>
                            <Switch>



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

                                <Route render={()=>{<h1>NADA QUE VER AQUI</h1>}} />


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