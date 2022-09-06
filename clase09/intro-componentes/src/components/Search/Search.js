import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state= {
            valor:''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
        console.log(event)
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        },
        () => this.props.filtrar(this.state.valor)
        )
    }

    render(){
        return(
            <form onSubmit={(e)=> this.evitarSubmit(e) } >
                <input type='text' onChange={(e) => this.controlarCambios(e)} value={this.state.valor} />
            </form>
        )
    }
}

export default Search