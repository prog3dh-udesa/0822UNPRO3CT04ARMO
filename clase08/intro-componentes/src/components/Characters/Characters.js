import React, { Component } from 'react'
import Character from '../Character/Character';
import Search from '../Search/Search'
import Filtro from '../Filtro/Filtro';


const info = [
    {
        img: 'ahsoka.jpg',
        name: 'Ashoka',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    }, 
    {
        img: 'anakin.jpg',
        name: 'Anakin',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },
    {
        img: 'batman.jpg',
        name: 'Batman',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'DC Comics',
    },
    {
        img: 'hulkSmall.jpg',
        name: 'Hulk',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'Marvel',
    },
    {
        img: 'kyloRen.jpg',
        name: 'Kylo Ren',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },       
]; 

class Characters extends Component {

    constructor(props){
        super(props)
        this.state={
            personajes: [],
            backup:[],
            prueba:''
        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(resp => resp.json())
        .then(data => this.setState({
            personajes: data.results,
            backup:data.results
        }))
        .catch(err => console.log(err)) 
    }

    componentDidUpdate(){
    }

    borrar(name){
        let personajesFiltrado = this.state.personajes.filter(personaje => personaje.name !== name)
        this.setState({
            personajes: personajesFiltrado
        })
    }

    buscarPersonajes(nombre){
        fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            personajes: data.results
        }))
        .catch(err => console.log(err))
    }


    filtrarPersonajes(nombre){
        let arrayFiltrado = 
        this.state.backup.filter
        (personaje => personaje.name.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            personajes: arrayFiltrado
        })
    }

  render() {
    console.log('Soy el Render')
    return (
        <>
        <Filtro filtro={(nombre)=> this.filtrarPersonajes(nombre)} />
        <section className="card-container">
            {
                this.state.personajes.length > 0 ?
                    this.state.personajes.map((personaje, idx) => 
                    <Character 
                    key={personaje + idx} 
                    info={personaje} 
                    borrar={(name) => this.borrar(name)}
                    />):
                <h1>Cargando..</h1>
            }
      </section>
        </>
    )
  }
}


export default Characters