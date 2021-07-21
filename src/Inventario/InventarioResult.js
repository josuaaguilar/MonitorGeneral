import { useEffect } from "react";


function InventarioResult (props) {
    //console.log(props);    
    const Res = props.res;
    /* const data2 = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars');
    const res2 = await data2.json() */
    console.log(Res)

    return(
        <div className="InventarioResult">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Armamento</th>
                        <th>Bonus</th>
                        <th>Bonus de Civilizacion</th>
                        <th>Tecnologia unica</th>
                    </tr>                    
                </thead>            
                <tbody>
                    {Res.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.army_type}</td>
                        <td>{item.team_bonus}</td>
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
