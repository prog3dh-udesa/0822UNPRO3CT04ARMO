import React, {Component} from 'react'
import './styles.css'

class Character extends Component {

  constructor(props){
    super(props)
    this.state ={
      showMore: false
    }
  }


  render(){
    return (
      <div className="character-card">
            <img src={`./characters/characters/${this.props.info.img}`} alt="" />
            <h4>{this.props.info.name}</h4>
            <p>Character description</p>
            <p>Lorem ipsum</p>
            <a href="#">Ver más</a>
            <button onClick={()=> this.props.borrar(this.props.info.name)}>Borrar</button>
      </div>
  
    )
  }
}

export default Character