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

import React,{ useEffect, useState } from "react";
import {Link} from  'react-router-dom';
import {useParams} from 'react-router';



/* Componente funcional
No requiere que se anteponga this.  como en el componente de clase
*/
function Busquedas(props){
    //console.log(useParams());
//    const Busquedas = (props) => {
    
    //const [count,setCount] = useState([]);
    const [resp,setResp] = useState([]);
    //let {id} = useParams();
    const fetchApi = async (id) => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const usuarios = await data.json();
        setResp(usuarios.civilizations);
        
        
    }

    useEffect(()=> {
        //document.title = `clicks ${count} times`;
        //fetchApi();        
    },[]);

    
    return(
        <div className="BusquedasForm">
        <p>{props.Nombre}</p>
        <input/><br/>
        {/* <button onClick={props.onClick}> Buscar!!!</button> */}
        <button onClick={() => fetchApi()}>Presiona para solicitar Usuarios!!</button>
        <ul>
            {
                resp.map(item => (
                    
                    <li key={item.id}>
                    <Link to={`/Busquedas/${item.id}`}>
                        {item.id} - {item.name} - {item.expansion}
                    </Link>
                    </li>
                ))
            }
        </ul>
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