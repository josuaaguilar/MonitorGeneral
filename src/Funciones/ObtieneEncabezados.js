function ObtieneEncabezados (obj){
    const arrayFromObj = [];
    for(const props in obj){ /* Este metodo sirve para sacar de un objeto  {clave : valor}  las claves y almacenarlas en un array */
        arrayFromObj.push(props)
    }
    return arrayFromObj.toString();
}
export default ObtieneEncabezados;