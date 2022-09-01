import React, { Component, useState, useEffect } from 'react';
import './App.css';


function App () {

  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operação, setOperação] = useState('Somar');

  const calcular = () => {
    if(operação == "Somar")
    return parseFloat(primeiro) + parseFloat(segundo);
    else if (operação=="Subtrair")
    return parseFloat(primeiro) - parseFloat(segundo);
    else if (operação=="Multiplicar")
    return parseFloat(primeiro) * parseFloat(segundo);
    else if (operação=="Dividir")
    return parseFloat(primeiro)/ parseFloat(segundo)
  }

useEffect(()=>{
  setResultado(calcular());
} ,[primeiro, segundo, operação]);





  return(
  <div className='App'>
    <h1>Calculadora </h1>
    <label>Primeiro </label>
    <input 
    type="number"
    value={primeiro} 
    onChange= {(e)=> setPrimeiro(e.target.value)}
/>
    <label>Segundo</label>
    <input
     type="number"
     value={segundo} 
    onChange= {(e)=> setSegundo(e.target.value)}
/>
     
  
    <select onChange={(e) =>setOperação(e.target.value) }>
      <option>Somar</option>
      <option>Subtrair</option>
      <option>Multiplicar</option>
      <option>Dividir</option>
      </select>
      <label>Resultado (resultado)</label>
     
  </div>
  )
}
export default App;
