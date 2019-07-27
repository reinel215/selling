import React,{Component} from 'react';


class Prueba extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <h1> {this.props.titulo} </h1>
        );
    }
}

export default Prueba;