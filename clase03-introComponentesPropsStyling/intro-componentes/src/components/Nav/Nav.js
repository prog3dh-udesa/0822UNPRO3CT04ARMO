import React from "react";

function Nav(props){

    return(
    <nav>
        <ul className="main-nav">
            {props.opciones.map((opcion, idx) => <li key={opcion + idx}>{opcion}</li>)}
        </ul>
        <ul className="user">
            <li>{props.nombre}
                <img src="./img/user.jpg" alt="" />
            </li>
        </ul>
    </nav>
    )
}

export default Nav