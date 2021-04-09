import Header from "./components/Header"
import General from "./components/General"
import Footer from "./components/Footer"

import arrayRM from "./rickandmorty.json"

import React, {Component} from "react";

export default class App extends Component {
  borrar = (idx) => {
    console.log(idx)
    arrayRM.filter()
  }

  render(){
    return (
      <div className="App">
        <Header/>

        <div className="general">

        {/* { arrayRM.map(function(datos, idx){
          return (            
            < General key ={idx} datosRM = {datos} id={idx.id}/>          
          )
        })} */}

        { arrayRM.map((datos)=> (            
            < General key ={datos.id} datosRM = {datos} id={datos.id} borrarOk={this.borrar}/>          
          )
        )}

        </div>

        <Footer/>
      </div>
    );
  }
    
}