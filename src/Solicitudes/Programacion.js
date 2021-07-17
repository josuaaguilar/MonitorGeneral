import React , {Component} from 'react';

class Programacion extends Component{
    render(){
        return(
        <div>
            <p>Estoy en Programacion</p>
            <p>{this.props.ApiResponse}</p>
        </div>);
    }
} 

export default Programacion;