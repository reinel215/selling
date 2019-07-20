import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Componente from './Componente'


class Principal extends Component {

    render(){

        return(
                    <div className="container">
                        <Componente titulo="hola mundo" ancho="50rem"></Componente>
                    </div>
        )
    }
}

export default Principal;