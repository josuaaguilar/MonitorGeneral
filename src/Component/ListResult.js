import { useEffect, useState } from "react";
import fetchData from "../Funciones/fetchData";
//import fetchData from "../Funciones/fetchData";


function ListResult (props){

    let url = props.url; // props.url -> {url: ["", ""]}
    //console.log(props) // -> {url: ["",""]}
    //console.log(props.url) // -> ["",""]
    const [Result, setResult] = useState([]
         //async () => {return  url.map(item => { FetchData(item)})}
         //{
       // console.log("Toy en la funcion flecha de useState")
            //url.map(item => FetchData(item))
    //} 
    )
    const [cont,setCont] = useState(0)
    async function tst(){
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior");
        const res = await data.json()
        //console.log(res)
        return res
    }
    const data = () => {
        return []
    }
    
    async function FetchData(url){
        const data = await fetch(url);
        const res = await data.json()
        setResult(res)
        //console.log(res)
        return res;
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
  }
         */
    }
    useEffect(async () => { 
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior");
        const res = await data.json()        
        setResult(res)
        //console.log(Result.id)
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