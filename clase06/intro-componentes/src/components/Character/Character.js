import React, {Component} from 'react'
import './styles.css'

class Character extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide'
    }
  }

  verMas(){
    if(this.state.verMas === 'show'){
      this.setState({
        verMas:'hide'
      })
    } else {
      this.setState({
        verMas:'show'
      })
    }
  }


  render(){
    return (
      <div className="character-card">
            <img src={this.props.info.image} alt="" />
            <h4>{this.props.info.name}</h4>
            <p>Character description</p>
            <p>{this.props.info.species}</p>
            <p>{this.props.info.status}</p>
  
              <p className={this.state.verMas}>{this.props.info.origin.name}</p>

            <button onClick={()=>this.verMas()}>Ver más</button>
            <button onClick={()=> this.props.borrar(this.props.info.name)}>Borrar</button>
      </div>
  
    )
  }
}

export default Character