import React,{Component} from 'react';
import ReactDom from 'react-dom';

const ReactTags = require('react-tag-autocomplete')

class IngresarProducto extends Component {
    constructor(props){
        super(props);
        this.state={
          producto_nombre:"",
          producto_descripcion:"",
          producto_imagen:"",
          producto_precio:"",
          producto_cantidad:"",





          tags: [],
          suggestions: []
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.faltaInformacion=this.faltaInformacion.bind(this);
        this.limpiar=this.limpiar.bind(this);
    }






















    componentDidMount(){//cargo las sugerencias
   
      fetch('/suggestions',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => { 
        this.setState({
          suggestions:data.suggestions
        });
      })
      .catch(err => console.log(err.code));
    }




















    handleChange(e){
      const { name, value } = e.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
    }























    handleSubmit(e){
      e.preventDefault();

      if(this.faltaInformacion()){
        return;
      }
      // envio solo los campos que necesito para la insercion 
      let {producto_nombre,producto_descripcion,producto_imagen,producto_cantidad,producto_precio,tags}=this.state;

      fetch('/ingresarProducto',{
        method: 'POST',
        body: JSON.stringify({producto_nombre,producto_descripcion,producto_imagen,producto_cantidad,producto_precio,tags}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => { 
        if(data.mensaje==1){
          this.limpiar();
        }
      })
      .catch(err => console.log(err.code))





    }

























    handleDelete (i) {
      const tags = this.state.tags.slice(0)
      tags.splice(i, 1)
      this.setState({ tags })
    }
   
    handleAddition (tag) {//compruebo si el tag esta entre los sugeridos
      const tags = [].concat(this.state.tags, tag)
      this.setState({ tags })
    }
  
























    faltaInformacion(){
      //valido si no ha llenado el nombre
      if(this.state.producto_nombre==""){
        alert("llene el nombre del producto...");
        return true;
      }

      //valido si no ha llenado la descripcion
      if(this.state.producto_descripcion==""){
        alert("llene la descripcion del producto...");
        return true;
      }

      //valido si no ha llenado el precio
      if(this.state.producto_precio==""){
        alert("coloquele un precio al producto...");
        return true;
      }
      else{//valido que sea un numero
        if(!/^([0-9])*$/.test(this.state.producto_precio)){
          alert("debe introducir solo numeros en el precio...");
          return true;
        }
      }

      //valido si no ha llenado la cantidad
      if(this.state.producto_cantidad==""){
        alert("coloquele la cantidad al producto...");
        return true;
      }
      else{//valido que sea un numero
        if(!/^([0-9])*$/.test(this.state.producto_cantidad)){
          alert("debe introducir solo numeros en la cantidad...");
          return true;
        }
      }
      //tiene que tener por lo menos 3 etiquetas
      if(this.state.tags.length<3){
        alert("debe tener por lo menos 3 etiquetas");
        return true;
      }

      return false;
    }












    limpiar(){
      this.setState({
        producto_nombre:"",
        producto_descripcion:"",
        producto_cantidad:"",
        producto_precio:"",
        producto_imagen:"",
        tags:[]
      });

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
                                <input type="text" className="form-control pb-3" name="producto_nombre" id="producto_nombre" onChange={this.handleChange}></input>


                                <h6>descripcion:</h6>
                                <textarea className="form-control" id="producto_descripcion" rows="3" name="producto_descripcion"  onChange={this.handleChange}></textarea>


                                <h6>imagen(link por ahora):</h6>
                                <input type="text" className="form-control mb-3" name="producto_imagen" id="producto_imagen" onChange={this.handleChange}></input>
                                <img src={this.state.producto_imagen} className="imagen_producto" alt="inserte la imagen"></img>


                                <div className="row pt-3 pb-3">
                                  <div className="col">
                                    <input type="text" className="form-control" placeholder="precio" name="producto_precio" id="producto_precio" onChange={this.handleChange}></input>
                                  </div>
                                  <div className="col">
                                    <input type="text" className="form-control" placeholder="cantidad" name="producto_cantidad" id="producto_cantidad" onChange={this.handleChange}></input>
                                  </div>
                                </div>

                                <h5>tags:</h5>
                                <ReactTags
                                allowNew
                                tags={this.state.tags}
                                suggestions={this.state.suggestions}
                                handleDelete={this.handleDelete.bind(this)}
                                handleAddition={this.handleAddition.bind(this)} />


                                    <button type="submit" className="btn btn-primary btn-block mt-3" onClick={this.handleSubmit}>registrar producto</button>
                                    <button type="submit" className="btn btn-danger btn-block">cerrar</button>

                        </form>
                    </div>
                </div> 
        )
    }
}

export default IngresarProducto;