import React from "react"

function General (props){
    return(
        <div className="contenedor">
            <img src={props.datosRM.image} alt=""/>  
            <h2 className="titulo"> {props.datosRM.name} </h2>
            <h3> {props.datosRM.status} - {props.datosRM.species}</h3>
            <h3> Origin: {props.datosRM.origin.name} </h3>
        </div>            
    )
}

export default General