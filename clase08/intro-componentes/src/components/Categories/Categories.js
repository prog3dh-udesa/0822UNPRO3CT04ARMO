import React, { Component } from 'react'
import Category from '../Category/Category'

const categorias = ['1','2','3','4','5','6',]

class Categories extends Component {
  render(){
    return (
      <>
          <h2>Categories in database</h2>
          <section className='general-data'>
          {categorias.map( (categoria, idx) => <Category key={categoria + idx} number={categoria} />)}
          </section>
      </>
    )
  }
}

export default  Categories
