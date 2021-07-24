import { useEffect, useState } from "react";
function ListResult (props){
    let url = props.url; 
    const [Result, setResult] = useState([])
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
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior");
        const res = await data.json()        
        setResult(res)
        },[])
    return(        
            <ul>
                {
                    <li key={Result.id} >{Result.name}</li>
                }
            </ul>       
    ); //Retorna JSX
}
export default ListResult;