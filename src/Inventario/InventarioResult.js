import { useEffect } from "react";


function InventarioResult (props) {
    //console.log(props);
    
    //console.log(Res);
    const Res = props.res

    return(
        <div className="InventarioResult">
        <ul>
                {
                    Res.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
                   
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