import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import './App.css';

function App() {
  let nombre = "Oliver";
  let auth = true;
  // let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <>
    <div className="App">
      <header className="App-header">
        <section>


        <img src={logo} className="App-logo" alt="logo" />
        {/* <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario está logueado" : "El usuario no está logueado"}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>{2 + 1}</p> */}

        {/* <ul>
          {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
          ))}
        </ul> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a> */}

        <section>
      <Componente msg="Hola soy un componente funcional expresado desde una prop" />
      <hr/>
      <Propiedades cadena="Esto es una cadena de texto" 
      numero={19}
      booleano={false}
      arreglo={[1,2,3]}
      objeto={{nombre: "Oliver", correo: "zapataoliver596@gmail.com"}}
      funcion={num => num*num}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente msg="Soy un componente pasado como prop"/>} />
      </section>

        </section>
      </header>
    </div>


    </>
  );
}

export default App;
