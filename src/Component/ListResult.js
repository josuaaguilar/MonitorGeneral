import { Fragment, useEffect, useState } from "react";
function ListResult (props){
    let url = props.url; 
    const [Result, setResult] = useState([])
    const [isUpdate,setUpdate] = useState(true)
    let unique_unitArr = []
    /*
    res -> {
        "id": 79, 
        "name": "Jaguar Warrior", 
        "description": "Aztec unique unit. Attack bonus vs. other infantry", 
        "expansion": "The Conquerors", 
        "age": "Castle", 
        "created_in": "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle", 
        "cost": {
            "Food": 60, 
            "Gold": 30
    }*/


    useEffect(async () => {
        console.log(Result) // primera pasada : verctor vacio []
        if(isUpdate){
            console.log("is update true")
            url.map(async item => {
                //console.log(item) -> la url por cada posicion del vector en el objeto : {url : ["",""...]}
                const data = await fetch(item)
                const res = await data.json()
                unique_unitArr.push(res)
                setResult(unique_unitArr)    
                //console.log(Result)  -> Vacio 
            })
            setUpdate(false)
        } else {
            console.log("Is update false")
        }
        console.log(Result) // muestra el objeto { id:0, name:"samu"....}
        })
    return(        
            <ul>
            {
                Result.map((item,index) => (
                    <li key={index}>Nombre: {item.name}</li>
                ))
            }
            </ul>       
    ); //Retorna JSX
}
export default ListResult;