import React,{Component} from 'react';
import estilos from './Categoria.css';



class Categoria extends Component{

    constructor(props){
        super(props);
        this.state={
            predeterminado:true,


            mensaje:"",
            mensajeExpandido:"",
            height:this.props.height,
            width:this.props.width,
            colorContraido:"#ffffff",
            colorExpandido:"#ffffff",
            colorActual:"#ffffff",
            transition:""
        }


        this.handleMouseEntry=this.handleMouseEntry.bind(this);
        this.handleMouseLeave=this.handleMouseLeave.bind(this);
        this.predeterminado=this.predeterminado.bind(this);
    }


    //comprobar si las props son las predeterminadas 
    predeterminado(){
        if(this.props.anchuraExpandido!=undefined || this.props.alturaExpandido!=undefined){
            this.setState({
                predeterminado:false
            })
        }
    }

    componentDidMount(){
        this.predeterminado();

        this.setState({
            mensajeExpandido:this.props.mensaje,
            colorContraido:this.props.color,
            colorExpandido:this.props.colorA,
            colorActual:this.props.color,
            transition:"width 1s, height 1s,background-color 1s"
        })

    }


// ********* manejadores para los eventos de entrada y salida del mouse *********

    handleMouseEntry(){

        if(this.state.predeterminado){
            this.setState({
                mensaje:this.state.mensajeExpandido,
                height: this.state.height*2,
                width: this.state.width*2,
                colorActual:this.state.colorExpandido
            });
        }
        else{
            this.setState({
                mensaje:this.state.mensajeExpandido,
                height: this.props.alturaExpandido,
                width: this.props.anchuraExpandido,
                colorActual:this.state.colorExpandido
            });
        }
    }


    handleMouseLeave(){
        if(this.state.predeterminado){
            this.setState({
                mensaje:"",
                height: this.state.height/2,
                width: this.state.width/2,
                colorActual:this.state.colorContraido
            });
        }
        else{
            this.setState({
                mensaje:"",
                height: this.props.height,
                width: this.props.width,
                colorActual:this.state.colorContraido
            });
        }
    }



    



    //renderizado del button 

    render(){
        return(
            <button className="Categoria" onMouseEnter={this.handleMouseEntry} onMouseLeave={this.handleMouseLeave} 
            style={{
                height:this.state.height,
                width:this.state.width,
                backgroundColor:this.state.colorActual,
                transition:this.state.transition
                }}>
                {this.props.children}
                {this.state.mensaje}
            </button>
        )
    }

}



export default Categoria;