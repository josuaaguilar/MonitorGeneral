import { useEffect } from "react";
import ListResult from '../Component/ListResult';
import fetchData from "../Funciones/fetchData";

function InventarioResult (props) {
    let unique_unitArray = [];
    const Res = props.res;
    let encabezadosArr = [];
   /*  useEffect(() => {
            for(const encabezados in Res[0]){
                encabezadosArr.push(encabezados)
            }
    }); */
    async function handleClick(url){
        //let url = e.target.text;
        const data = await fetch(url);
        const res = await data.json()
        return res
    }
    async function handleLiClic(e) {
        //alert("Click en ul")
        const url = e.target.value
        if(url ===""){
            alert("No hay datos")
        } else {
            const res = await handleClick(url)
            alert(res.name)
        }        
    }
    
    return(
        <div className="InventarioResult">
        <button>Encabezados</button>
            <table>
                <thead>
                   <tr>
                       <th>id</th>
                       <th>Nombre</th>
                       <th>Expacion</th>
                       <th>Tipo de armamento</th>
                       <th>Unidades unicas</th>
                   </tr>
                </thead>            
                <tbody>
                    {Res.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.expansion}</td>
                        <td>{item.army_type}</td>
                        <td>
                            {/* <button onClick={handleLiClic} value={item.unique_unit}>Haz clic para mas detalles</button> */}
                            {<ListResult url={item.unique_unit} className="ListResult"/>}
                            
                        </td>
                    </tr>
                    
                    ))}
                </tbody>
            </table>                   
        </div>
    ); //Retorna JSX
}

/*
---------------------------------------------
<td>{agregar aqui una funcion para solicitar cada url de tecnología unica }</td>
---------------------------------------------
<td>
                            <ul key={item.id}>
                                {handleClick(item.unique_unit)}
                            </ul>
                        </td>
------------------------------
<td>
                                    {tr como renglones para cada posicion del arreglo
                                        item.civilization_bonus.map((bonus,index) => {return (<li key={index}>{bonus}</li>)})
                                    }
                        </td>
-------------------------------
Esta funcion retorna en forma de lista, vamos a cambiarla por un retorno del tipo Select > Options:
<ul>
                {
                    Res.map(item => (
                        <li key={item.id}>{item.expansion} - {item.name} - {item.army_type} - {item.team_bonus}</li>
                    ))
                }
            </ul>
------------------------------------------------------------------------------------------------------------------------------->
Esta funcion me sirve para seleccionar de un conjunto de posibilidades, preferente que el conjunto sea estatico, de igual forma se puede llenar hasta que se de clic:
<p>Selecciona una civilizacion</p>
        <select name="SelectCivilizacion">
            {
                Res.map(item => (
                    <option value={item.name} key={item.id}>{item.name}</option>
                ))
            }
        </select> 

*/
export default InventarioResult;

