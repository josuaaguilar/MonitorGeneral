import { Fragment, useEffect, useState } from "react";

function Row(props){
    const [encabezados , setEncabezados] = useState([])   
    console.log(props.data) 
    useEffect(() => {
        //setEncabezados(props.encabezados)
        console.log(props.id)
    })    
    /* De nada sirve separar los componentes como si fueran objetos que puedo manipular. Preferente que en un solo componente se llamen todos los JSX.
    Validar componentes funcionales que retornan estructuras completas. Validar si es requerido que se llaman componentes hijos en estos componentes.
    Validar paso de parametros hacia los componentes hijos antes de implementar. Validar si con setState se solventa la parte del paso de parametros
    Para retornar un conjunto de respuestas, es necesario recorrer el vector (en este caso se encuentra en props.encabezados este dato proviene del componente padre:
         <EncabezadoRow encabezados = {Myprops}/>  ).
         Tambien es necesario que la función .map retorne algo y solo puede retornar si lleva parentesis en lugar de llaves:
         Object/Array.map( (item,index) => () en lugar de => {})
    */
    return(
        <tr>
        <Fragment>
           {encabezados.map((item,index) => (<th key={index}>{item}</th>))}
        </Fragment>
        </tr>       
    );//Retorna JSX
}
export default Row;
