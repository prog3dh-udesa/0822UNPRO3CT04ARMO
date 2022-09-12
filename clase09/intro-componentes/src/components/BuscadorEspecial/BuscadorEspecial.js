import React, { Component } from 'react'

class BuscadorEspecial extends Component {
    constructor(props){
        super(props)
        this.state ={
            valorInput:''
        }
    }

    prevenirRefresh(event){
        event.preventDefault()
    }

    actualizarEstadoInput(event){
        this.setState({
            valorInput: event.target.value
        }, () => this.props.buscador(this.state.valorInput))
    }


  render() {
    return (
      <form onSubmit={(event)=> this.prevenirRefresh(event)}>
        <label>Este es el buscador que llama a la API</label>
        <input type='text' onChange={(event)=> this.actualizarEstadoInput(event)} value={this.state.valorInput}/>
      </form>
    )
  }
}
export default BuscadorEspecial