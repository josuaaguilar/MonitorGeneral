import { useEffect, useState } from "react";
function ListResult (props){
    let url = props.url; 
    const [Result, setResult] = useState([])
    const [isUpdate,setUpdate] = useState(true)
    let unique_unitArr = []
    useEffect(async () => {
        if(isUpdate){
            url.map(async item => {
                const data = await fetch(item)
                const res = await data.json()
                unique_unitArr.push(res)
                setResult(unique_unitArr)    
            })
            setUpdate(false)
        } 
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