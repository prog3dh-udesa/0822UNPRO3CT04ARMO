import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'
import Characters from '../../components/Characters/Characters'
import Categories from '../../components/Categories/Categories'
import BuscadorEspecial from '../../components/BuscadorEspecial/BuscadorEspecial'

class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
      resultados: [],
      sinResultados: false
    }
  }

  buscador(name){
    if(name !== ''){
      fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(resp => resp.json())
      .then(data => {
        if(data.results.length > 0){
          this.setState({
            resultados:data.results,
            sinResultados: false
          })
        }
      })
      .catch(err =>{
        this.setState({
          sinResultados:true
        })
      })

    } else {

      this.setState({
        resultados:[]
      })
    }
  }
  
  render() {
    return (
      <>
        <Cards />
        <Categories />
        <BuscadorEspecial buscador={(name) => this.buscador(name)} />
        {
          this.state.sinResultados ?
          <h2>No se encontraron resultados</h2>
          :
          this.state.resultados.length > 0 ?
          this.state.resultados.map(elm => <h2>{elm.name}</h2>)
          : ''
        }
        <Characters />
      </>
    )
  }
}

export default Home