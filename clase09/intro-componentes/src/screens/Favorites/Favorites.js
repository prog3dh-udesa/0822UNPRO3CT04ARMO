import React, {Component} from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state={
            personaje:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage!== null){
            let parsedStorage = JSON.parse(storage)
            
            Promise.all(
                parsedStorage.map(elm =>{
                    return(
                        fetch(`https://rickandmortyapi.com/api/character/${elm}`)
                        .then(resp => resp.json())
                        )
                })
            )
            .then(data => console.log(data))
        }
    }

    render(){
        return(
            <h1>
                Favoritos
            </h1>
        )
    }
}

export default Favorites