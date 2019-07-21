import React,{Component} from 'react';
import ReactDom from 'react-dom';
import App from './App';


class IngresarProducto extends Component {
    constructor(props){
        super(props);

    }

    render(){
        let ancho={
            width:this.props.ancho  
        };

        return(
              <div className="card" style={ancho}>
                    <div className="card-body">
                        <h5 className="card-title pb-3"><b> {this.props.titulo}</b></h5>
                        <form>  
                                <h6>nombre del producto:</h6>
                                <input type="text" className="form-control pb-3"></input>


                                <h6>descripcion:</h6>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


                                <h6>imagen(link por ahora):</h6>
                                <input type="text" className="form-control pb-3"></input>



                                <div className="row pt-3 pb-3">
                                  <div className="col">
                                    <input type="text" className="form-control" placeholder="precio"></input>
                                  </div>
                                  <div className="col">
                                    <input type="text" className="form-control" placeholder="cantidad"></input>
                                  </div>
                                </div>


                                <App></App>
                        </form>
                    </div>
                </div> 
        )
    }
}

export default IngresarProducto;