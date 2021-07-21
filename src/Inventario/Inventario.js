import React , {Component, useEffect, useState} from 'react';
import InventarioResult from './InventarioResult'

function Inventario (){
  const [Result,setResult] = useState([]);
  const [filterResults,setFilter] =  useState([])
  const fetchData = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const res = await data.json();
    setResult(res.civilizations)
    setFilter(res.civilizations)

    const data2 = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars');
    const res2 = await data2.json()
    
    
  }
  const handleChange = (e) => {
    let filter = e.target.value.toUpperCase();
    setFilter(Result.filter(item => item.name.toUpperCase().startsWith(filter)));
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