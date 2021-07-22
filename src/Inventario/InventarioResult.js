import { useEffect } from "react";
import EncabezadoRow from '../Component/Row';
import fetchData from "../Funciones/fetchData";

function InventarioResult (props) {
    
    const Res = props.res;
    let encabezadosArr = [];
    useEffect(() => {
            for(const encabezados in Res[0]){
                encabezadosArr.push(encabezados)
            }
    });
    async function onClickEncabezados() {
        fetchData("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior")
    }
    
    
    return(
        <div className="InventarioResult">
        <button onClick={onClickEncabezados}>Encabezados</button>
            <table>
                <thead>
                    <EncabezadoRow encabezados = {encabezadosArr}/>                    
                </thead>            
                <tbody>
                    {Res.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.expansion}</td>
                        <td>{item.army_type}</td>
                        <td>{{/* fetchData(item.unique_unit).map(item => {<li key={item.id}>{item.name}</li>}) */}}</td>
                        <td>
                                    {/* tr como renglones para cada posicion del arreglo */
                                        item.civilization_bonus.map((bonus,index) => {return (<li key={index}>{bonus}</li>)})
                                    }
                        </td>
                        <td>{/*agregar aqui una funcion para solicitar cada url de tecnología unica */}</td>
                    </tr>
                    
                    ))}
                </tbody>
            </table>                   
        </div>
    ); //Retorna JSX
}

/*
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
