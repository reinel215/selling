import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Route, Switch,BrowserRouter,Link,Redirect } from "react-router-dom";


import IngresarProducto from './IngresarProducto';
import Prueba from './Prueba';
import MuestraProductos from './MuestraProductos'
import Paginacion from './Paginacion';


class Principal extends Component {

    render(){

        return(
                    <div className="container">
                        <BrowserRouter>    
                        <Redirect from="/" to="/inicio"/>
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
                            <Link to="/inicio"><button>HOME</button></Link>
                            <Link to="/ingresar_producto"><button>ingresar producto</button></Link>
                            <Paginacion/>
                        </BrowserRouter>

                    </div>
        )
    }
}

export default Principal;