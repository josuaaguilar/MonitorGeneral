import React , {Component, useEffect, useState} from 'react';
import InventarioResult from './InventarioResult'


function Inventario (){
  let [Result,setResult] = useState([]);
  const fetchData = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const res = await data.json();
    setResult(res.civilizations)
  }
  useEffect( e => {
   // console.log("hook")
  });

    const handleChange = async (e) => {
      //await fetchData()      
      setResult(Result.filter(item => item.name.toUpperCase().startsWith(e.target.value.toUpperCase())));
      
      /* const FilteredResult = Result.filter(item =>
        item.name.toUpperCase().startsWith(e.target.value.toUpperCase()));
        setResult(FilteredResult); */


   /* Ya casiiii revisa la primera condicion
    console.log("hubu un cambio")
    console.log(e.target.value)
    //console.log(e.target.value)
    //console.log(Result)
    if(Result.length==0||e.target.value==''){
      console.log(Result)
      setResult([])
      //fetchData()
    }else{
      const newArr = Result.filter(item =>
        item.name.toUpperCase().startsWith(e.target.value.toUpperCase()))
        setResult(newArr)
    }
   */



    /*
    Funciona medio raro hay que pulir la logica
    console.log("Hubo un cambio")
    if(Result .length > 0){
      const filterArray = Result.filter(item => 
        item.name.includes(e.target.value)
      )
      console.log(filterArray)
      if(filterArray.length>0){
        setResult(filterArray)
      }
    }else{
      console.log("Es null");
    } */

    /*
    setResult(res => {
      Result.filter(item => {
        item.includes(e.target.value)
      })
    })
    const newFilter = Result.filter(param => {
      param.includes(e.target.value)
    }); */
    //setResult()
  }
  
    return (
    <div className="Inventario">
      <p>Filtra los resultados:</p>
      <input onChange={handleChange}/>
      <button onClick={fetchData}>Solicitar todos!!</button>
      <InventarioResult res = {Result}/>
    </div>
    );
}
export default Inventario;