import React,{Component} from 'react';
import {Link} from 'react-router-dom'

const estilo={
    width: "12rem",
    border:"0px",
    marginTop:"150px"
};


const Cardproducto_imagen={
    width:"130px",
    height:"130px",
    borderRadius:"65px",
    marginLeft:"auto",
    marginRight:"auto",
    left:"0",
    right:"0",
    top:"-65px",
    position:"absolute",
    border:"3px #111255 solid"
};




const Cardproducto_BodyCard={
    border:"3px #111255 solid",
    borderRadius:"5%",
    backgroundColor:"#c9c9db"
}



class Cardproducto extends Component {

    constructor(props){
        super(props);
    }



    render(){
        return( 
           
                <div className="card" style={estilo}>
                    <Link to="/algo">
                        <img src={this.props.imagen} style={Cardproducto_imagen} alt="Error"></img>
                        <div className="card-body" style={Cardproducto_BodyCard}>
                          <h5 className="card-title" style={{marginTop:"40px",color:"black",textAlign:"center"}}><b>{this.props.nombre}</b></h5>
                          <p className="card-text" style={{color:"black",textAlign:"center"}}> {"precio:"+this.props.precio}</p>
                          <div style={{display:"table",marginLeft:"auto",marginRight:"auto"}}> 
                            <span className="badge badge-pill badge-success" style={{display:"table-cell",verticalAlign:"middle"}}>cantidad:{this.props.cantidad}</span>
                          </div>
                        </div>
                    </Link>
                </div>
            
        )
    }
}

export default Cardproducto;