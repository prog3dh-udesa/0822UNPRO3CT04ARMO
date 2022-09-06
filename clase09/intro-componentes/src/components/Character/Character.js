import React, {Component} from 'react'
import './styles.css'

class Character extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide',
      favorito: false
    }
  }

  componentDidMount(){
    let storage = localStorage.getItem('favoritos')
    let parsedStorage = JSON.parse(storage)/*[25, 45, 89]*/
    if(parsedStorage !== null){
      let isFavorite = parsedStorage.includes(this.props.info.id) /*Si 89 esta incluido en el array */
      if(isFavorite) {
        this.setState({
          favorito:true
        })
      }
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

  addFavorites(id){
    let favStorage = localStorage.getItem('favoritos')

    if(favStorage === null){
      /* favStorage es null */
      let favArr = [id]
      let arrToString = JSON.stringify(favArr)
      localStorage.setItem('favoritos', arrToString)
    } else {
      /*favStorage es un string de array con algun valor o vacio*/
      let parsedArr = JSON.parse(favStorage)
      parsedArr.push(id)
      let arrToString = JSON.stringify(parsedArr)
      localStorage.setItem('favoritos', arrToString)
    }

    this.setState({
      favorito:true
    })

  }

  removeFavorites(id){
    /* 39 */
    let favStorage = localStorage.getItem('favoritos')
    let parsedStorage = JSON.parse(favStorage) /*Vuelve a ser Array [25, 12, 39]*/
    let filterStorage = parsedStorage.filter(elm => elm !== id) /*[25, 12]*/

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritos', storageToString)

    this.setState({
      favorito: false
    })
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
            {
              this.state.favorito
              ?
                <button onClick={()=> this.removeFavorites(this.props.info.id) }>Sacar de favoritos</button>
              :
                <button onClick={()=> this.addFavorites(this.props.info.id) }>Añadir a favoritos</button>
            }
            <button onClick={()=>this.verMas()}>Ver más</button>
            <button onClick={()=> this.props.borrar(this.props.info.name)}>Borrar</button>
      </div>
  
    )
  }
}

export default Character