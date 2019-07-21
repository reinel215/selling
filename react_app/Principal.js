import React,{Component} from 'react';
import ReactDom from 'react-dom';
import IngresarProducto from './IngresarProducto';


class Principal extends Component {

    render(){

        return(
                    <div className="container">
                        <IngresarProducto titulo="Ingrese su producto..." ancho="20rem">

                        </IngresarProducto>

                    </div>
        )
    }
}

export default Principal;