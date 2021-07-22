import React , {Component, useEffect, useState} from 'react';
import InventarioResult from './InventarioResult'

function Inventario (){
  const [Result,setResult] = useState([]);
  const [filterResults,setFilter] =  useState([])
  const fetchData = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const res = await data.json();
    let resArray = res.civilizations.map(item => item)
    setResult(res.civilizations)
    setFilter(res.civilizations)
  }
  const handleChange = (e) => {
    let filter = e.target.value.toUpperCase();
    setFilter(Result.filter(item => item.name.toUpperCase().startsWith(filter)));
  }
  const InventarioRes = () => {
    if(filterResults !== []){
      return (<InventarioResult/>)
    }else{
      return(<div className="InventariosResult"/>)
    }
  }
    return (
    <div className="Inventario">
      <p>Filtra los resultados:</p>
      <input onChange={handleChange}/>
      <button onClick={fetchData}>Solicitar todos!!</button>
      <InventarioResult res = {filterResults}/>
    </div>
    );
}
export default Inventario;