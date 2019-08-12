import React,{Component} from 'react';


//ICONOS DE MARCAS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const transaction={
    transition: "height 2s ease-out",

}

class Footer extends Component {
    constructor(props){
        super(props);

        this.state={
            height: "0px",
            numero:0,
        }

        this.cambiarComponente=this.cambiarComponente.bind(this);
        this.cerrar=this.cerrar.bind(this);
        this.renderizar=this.renderizar.bind(this);
    }




    cambiarComponente(numero){
       this.setState({
        numero:numero,
       });
    }


    cerrar(){
        this.setState({
            height:"0px"
        });
    }


    renderizar(numero){

        if(numero===1){
            return(
                <h1>numero1</h1>
            );
        }
        else if (numero===2){
            return(
                <div>
                <h1>numero2</h1>
                <h1>numero2,1</h1>
                <h1>numero2</h1>
                <h1>numero2,1</h1>
                <h1>numero2</h1>
                <h1>numero2,1</h1>
                <h1>numero2</h1>
                <h1>numero2,1</h1>
                </div>

            );
        }
        else if (numero===3){
            return(
                <h1>numero3</h1>
            );
        }
        else if (numero===4){
            return(
                <h1>numero4</h1>
            );
        }
        else{
            return null;
        }

    }



    componentDidUpdate(prevProps, prevState){
        let altura=document.getElementsByClassName("footer-mensaje-contenedor")[0].clientHeight;

        if(altura!==this.state.height){
            this.setState({
                height:altura
            });
        }
            
    }


    render(){
        return(
            <footer>

                <div className="mensaje" style={{...transaction,height:this.state.height}}>
                    <div className="footer-mensaje-contenedor">
                        {this.renderizar(this.state.numero)}
                    </div>
                </div>  

                <div className="links-footer" >
                    <button className="info-footer"  onClick={()=>this.cambiarComponente(1)}>SOBRE NOSOTROS</button>
                    <button className="info-footer" onClick={()=>this.cambiarComponente(2)}>CONTACTANOS</button>
                    <a className="info-footer" href="/">HOME</a>
                    <button className="info-footer" onClick={()=>this.cambiarComponente(3)}>OFICINAS</button>
                    <button className="info-footer"  onClick={()=>this.cambiarComponente(4)}>ALGO MAS</button>
                </div>


 

                <div className="iconos-footer">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
                    <a href="https://github.com/reinel215/selling"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                </div>



                <div className="derechos">
                    @Copyright 2019
                </div>  
            </footer>

        )
    }
}


export default Footer;

