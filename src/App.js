import React from "react";
import Header from "./components/Header"
import General from "./components/General"
import Footer from "./components/Footer"

import arrayRM from "./rickandmorty.json"


function App() {
  return (
    <div className="App">
      <Header/>

      <div className="general">
      { arrayRM.map(function(datos, idx){
        return (          
          < General key ={idx} datosRM = {datos}/>          
        )
      })}
      </div>

      <Footer/>
    </div>
  );
}

export default App;