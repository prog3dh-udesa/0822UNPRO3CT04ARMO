import React, {Component} from 'react'

class Contador  extends  Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.valorInicial,
            mostrar: false,
            textoBoton: 'hacerse premium'
        }
    }

    decrementar(){
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - this.props.valorRestar
            })
        }
    }

    incrementar(){
        if(this.state.value < 10){
            this.setState({
                value:this.state.value + this.props.valorSumar
            })
        }
    }

    hacersePremium(){
        if(this.state.mostrar){
            this.setState({
                mostrar: false,
                textoBoton: 'Hacerse premium'
            })
        } else {
            this.setState({
                mostrar: true,
                textoBoton: 'Borrar suscripción'
            })
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button
                onClick={() => this.decrementar()}
                >
                    Decrementar
                </button>
                <button
                onClick={()=> this.incrementar()}
                >
                    incrementar
                </button>
                {
                    this.state.mostrar ?
                    <div>
                        <h1>Contenido de gente premium</h1>
                    </div>
                    :
                    <h1>Contenido para no Premiums</h1>
                }

                <button
                onClick={()=> this.hacersePremium()}
                >
                    {this.state.textoBoton}
                </button>
            </div>
        )
    }
}

export default Contador