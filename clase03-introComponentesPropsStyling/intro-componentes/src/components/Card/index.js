import React from 'react'
import './styles.css'
function Card(props) {
    return(
        <article className="data-detail">
            <div className="card-content">
                <h4>{props.titulo}</h4>
                <p>{props.milanesa}</p>
            </div>
            <i className={`fas fa-${props.icono} fa-2x text-gray-300`}></i>
        </article>
    )
}

export default Card