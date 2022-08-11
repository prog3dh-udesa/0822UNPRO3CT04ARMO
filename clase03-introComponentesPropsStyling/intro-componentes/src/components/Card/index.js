import React from 'react'
import './styles.css'
function Card(props) {
    return(
        <article className="data-detail">
            <div className="card-content">
                <h4>{props.info.title}</h4>
                <p>{props.info.price}</p>
            </div>
            <i className={`fas fa-${props.info.icon} fa-2x text-gray-300`}></i>
        </article>
    )
}

export default Card