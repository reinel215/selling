import React,{Component} from 'react';
import Cardproducto from './Cardproducto';



const muestra_productosEstilo={
    marginLeft:0,
    width:"75%"
}







class MuestraProductos extends Component {
    constructor(props){
        super(props);

        this.state={
            productos:[]
        }
        this.buscarProductos=this.buscarProductos.bind(this);
    }



    buscarProductos(pagina){

        fetch('/inicio/pagina/muestra',{
          method: 'POST',
          body: JSON.stringify({pagina}),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => { 
          this.setState({
              productos:data
          });
        })
        .catch(err => console.log(err.code));
    }

    componentWillReceiveProps(nextProps){
 
        let {pagina}=nextProps.match.params
        this.buscarProductos(pagina);
    }


  componentDidMount(){
    this.buscarProductos(1);
  }

    render(){
        return(
            <div className="muestra_productos" style={muestra_productosEstilo}>
                {//codigo comienza aqui
                    this.state.productos.map(producto =>{
                        return <div style={{float:"left", marginRight:"15px",marginLeft:"15px"}} key={producto.id_producto}>
                                    <Cardproducto imagen={producto.imagen} nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} />
                               </div>
                    })
                }
            </div>
        )
    }
}


export default MuestraProductos;