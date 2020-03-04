import React,{Component} from 'react';
import estilos from './Menu.css';






class Menu extends Component {

    constructor(args){
        super(args);

        this.state={
            altura:"0px"
        }

    }


    /*usamos el metodo para setear la altura del div fixed con la cantidad de elementos dentro del "div"*/
    componentDidMount(){
        let height=document.getElementsByClassName("contenido_menu")[0].clientHeight;
        if(height!==this.state.altura){
            this.setState({
                altura:height
            });
        }
    }


    render(){
        return(
            <div className="menu_prueba">
                <div className="menu_fixed" style={{height:this.state.altura}}>
                    <div className="contenido_menu">
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;