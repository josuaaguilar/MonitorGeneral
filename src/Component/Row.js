import { Fragment, useEffect, useState } from "react";

function Row(props){
    const [encabezados,setEncabezados] = useState([])
    useEffect(item => {
        setEncabezados(props.encabezados)
    })
    /*
    Para retornar un conjunto de respuestas, es necesario recorrer el vector (en este caso se encuentra en props.encabezados este dato proviene del componente padre:
         <EncabezadoRow encabezados = {Myprops}/>  ).
         Tambien es necesario que la función .map retorne algo y solo puede retornar si lleva parentesis en lugar de llaves:
         Object/Array.map( (item,index) => () en lugar de => {})
    */
    return(
        <tr>
           {encabezados.map((item,index) => (<td key={index}>{item}</td>))}
        </tr>       
    );//Retorna JSX
}

export default Row;
