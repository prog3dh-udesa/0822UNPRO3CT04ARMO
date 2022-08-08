import React from "react";

function Nav(props){
    console.log(props.opciones)
    return(
    <nav>
        <ul className="main-nav">
            {props.opciones.map(opcion => <li>{opcion}</li>)}
        </ul>
        <ul className="user">
            <li>Nombre usuario 
                <img src="./img/user.jpg" alt="" />
            </li>
        </ul>
    </nav>
    )
}

export default Nav