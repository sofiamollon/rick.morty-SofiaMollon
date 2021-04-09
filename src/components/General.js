import React, {Component} from "react";

export default class General extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:this.props.color
        }
    }

    cambiarColor = (colorNuevo) => {
        if (this.state.color !== "coral"){
            this.setState({color: colorNuevo})
        }
        else{}
            
    }

    borrar = ()=>{
        this.props.borrarOk(this.props.id)
    }


    render(){
        return(
            <div className="contenedor" style={{backgroundColor: this.state.color}} onMouseOver={() => this.cambiarColor("lightblue")} onMouseOut={() => this.cambiarColor("")}>
                <img src={this.props.datosRM.image} alt=""/>  
                <h2 className="titulo"> {this.props.datosRM.name} </h2>
                <h3> {this.props.datosRM.status} - {this.props.datosRM.species}</h3>
                <h3> Origin: {this.props.datosRM.origin.name} </h3>
                <br/>
                <button className="color" onClick={() => this.cambiarColor("coral")}> Cambiar Color </button> <br/>
                <button className="borrar" onClick={() => this.borrar()}> Borrar </button>
            </div>            
        )
    }
}