import React,{Component} from 'react';
import {Link} from 'react-router-dom'




class Paginacion extends Component {

    constructor(props){
        super(props);

        this.state={
            pagina:1,
            cantidad:0
        }


        this.crearPaginas=this.crearPaginas.bind(this);
    }


    crearPaginas(){
        let paginas=[];
        for (let i = 1; i <= this.state.cantidad; i++) {
            paginas.push(
                <li className="page-item" key={i}> 
                    <Link className="page-link" to={"/inicio/pagina/" +i}>
                        <span>{i}</span> 
                    </Link>
                </li>
            );
            
        }
        return paginas;
    }


    componentDidMount(){
        fetch('/inicio/cantidad',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(cantidad => { 
            this.setState({
                cantidad:Math.ceil(cantidad/50)
            });
        })
    }



    render(){
        return(
            
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  {//codigo comienza aqui  
                    this.crearPaginas()
                  }
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
        )
    }
}

export default Paginacion