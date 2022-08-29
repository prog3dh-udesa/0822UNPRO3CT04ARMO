import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            character:{
                name:'Nelson',
                id:20
            }
        }
    }
    render(){
        return(
            <>
                <h1>Soy el home</h1>
                <Link to={`/details/${this.state.character.id}`}> Soy un link a un detalle de producto</Link>
            </>
        )
    }
}

export default Home