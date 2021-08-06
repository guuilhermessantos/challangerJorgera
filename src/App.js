import './App.css';
import React, {useEffect, useState} from 'react';
import api from "./services/api"

function App() { 
  //1 valor variavel, 2 valor : função js que dispara o valor da 1 variavel 
  const [email,setEmail] = useState("")

  // desestruturando api
  const [population,setPopulation] = useState("")
  const [planeta,setPlaneta] = useState("")
  const [gravity,setGravity] = useState("")
  const [clima,setClima] = useState("")
  const [diametro,setDiametro] = useState("")
  const [page,setPage] = useState(1)

  

  useEffect(() => {
    // const response = api.get('/planets')
    // console.log(response.data)
    api
      .get(`${page}`)
      .then((response) => {
        setPopulation(response.data.population)
        setPlaneta(response.data.name)
        setGravity(response.data.gravity)
        setClima(response.data.climate)
        setDiametro(response.data.diameter)

        // se tiver array no retorno da api classificar a posição do array para busca de dados, caso alcontrario não tras dados por n achar objetos

        // console.log(response.data.count)
        // console.log(response.data.next)
        // console.log(response.data.previous)
        // console.log(response.data.results[0].name)
        // setUser(response.data.results[0].name)

        
      })
      
      
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);

  function nextPlanet() {
    setPage(page + 1) 
    
  }

  return  (
    <div className="App">
      <div className="backgroundForm">
        <div className="Formulario">
          <h1>Cadastre-se</h1>
          <p> Receba noticias sobre o mundo de star wars </p>

          <form>
            <label>Nome</label>
            <input placeholder="Insira seu Nome" type="text"/>

            <label>E-mail</label>
            <input placeholder="Insira seu E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>    

            <label>Telefone</label>
            <input placeholder="Insira seu Telefone" type="password"/>
            <button>Confirmar</button>
          </form>

          <h3>Bem-Vindo {email}</h3>

        </div>
      </div>
      <div className="backgroundPlanet">
        <div className="Planetas">
          <div className="HeaderDiv">
            <h3> Planeta</h3>
            <h2> {planeta}</h2>
          </div>

        <ul>
          <li className="info">Gravidade</li>
          <li className="out">{gravity}</li>
          <hr/>
          <li className="info">Clima</li>
          <li className="out">{clima}</li>
          <hr/>
          <li className="info">População</li>
          <li className="out">{population}</li>
          <hr/>
          <li className="info">Diametro</li>
          <li className="out">{diametro}</li>
        </ul>
        

        </div>
      <button onClick={nextPlanet}>NEXT</button>
      </div>
    </div>
  );
}

export default App;
