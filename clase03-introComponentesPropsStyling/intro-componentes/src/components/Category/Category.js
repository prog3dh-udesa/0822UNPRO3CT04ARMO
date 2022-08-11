import React from 'react'


function Category(props) {
  return (
    <article className='card'>
        <p>Category {props.number}</p>
    </article>
  )
}

export default Category