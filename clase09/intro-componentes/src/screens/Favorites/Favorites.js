import React, {Component} from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            personajesFavoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id =>{
                    return(
                        fetch(`https://rickandmortyapi.com/api/character/${id}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            ).then(data => this.setState({
                personajesFavoritos: data
            }))
            .catch(err => console.log(err))

            // this.setState({
            //     personajesFavoritos: parsedStorage
            // })
        }
    }
    

    render(){
        return(
            <div>
                {
                    this.state.personajesFavoritos.length > 0 ?
                    this.state.personajesFavoritos.map((elm, idx) => <h4 key={idx + elm.name}>{elm.name}</h4>)
                    : 'Cargando..'
                }
            </div>
        )
    }
}

export default Favorites