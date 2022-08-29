import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'
import Characters from '../../components/Characters/Characters'
import Categories from '../../components/Categories/Categories'


class Home extends Component {
  render() {
    return (
      <>
        <Cards />
        <Categories />
        <Characters />
      </>
    )
  }
}

export default Home