/* import React , {Component} from 'react';

class Busquedas extends Component {
    constructor(props){
        super(props);
        this.Nombre= this.props.Nombre;
    }
    
    render(){
        // La prop onClick la define el componente padre!!!!! 
        return <button onClick = {() => this.props.onClick()} >Buscar!!!</button>
    }
}


//export default Busquedas; */



/* Componente funcional
No requiere que se anteponga this.  como en el componente de clase
*/
function Busquedas(props){
    return(
        <div>
        <p>{props.Nombre}</p>
        <input/>
        <button onClick={props.onClick}> Buscar!!!</button>
        </div>
    );
}
export default Busquedas
/* 
Este codigo es anterior a ingresar el visible pasado desde props
<button onClick = {() => this.setState({value:"cliqueao"})} >{this.state.value}</button>
----------------------------------------------
<nav>
                <p>{this.state.Nombre}</p>
                <input/>
                <button onClick = {() => this.props.onClick()} >{this.state.value}</button>
            </nav>
*/