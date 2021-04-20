import Header from "./components/Header"
import General from "./components/General"
import Footer from "./components/Footer"
import arrayRM from "./rickandmorty.json"
import React, {Component} from "react";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      arrayOk: arrayRM
    }
  }

  borrar (idx){
    console.log(idx)
    let resultado = this.state.arrayOk.filter((datos) =>{
      return datos.id !== idx
    })
    this.setState({arrayOk: resultado})
  }

  reset(){
    this.setState({arrayOk: arrayRM})
    console.log("reset")
  }
  
  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(resource => resource.json())
    .then(data => {
      this.setState({arrayOk: data.results});
      console.log(this.state.arrayOk)
    })
    .catch((e) => {
      console.log("Error: " + e)
    })
  }

  agregar(){
    fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then(resource => resource.json())
    .then(data => {
      this.state.arrayOk.push(data.results[0]);
      this.setState({arrayOk: this.state.arrayOk})
      console.log(data)
    })
    .catch((e) => {
      console.log("Error: " + e)
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <button className="reset" onClick={this.reset.bind(this)}> Reset all </button>

        <div className="general">
          {this.state.arrayOk.map((datos)=> {         
              return < General key={datos.id} datosRM={datos} id={datos.id} borrarOk={this.borrar.bind(this)}/>          
            
          })}
        </div>

        <button className="agregar" onClick={() => this.agregar()}> More cards </button>

        <Footer/>
      </div>
    );
  }    
}