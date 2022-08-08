import React from 'react'
import Titulo from './components/Titulo/Titulo'
import Card from './components/Card'
import Nav from './components/Nav/Nav'
import Characters from './components/Characters/Characters'


function App() {
  const opciones = ['pages','admin','tables', 'charts', 'Paseo de perritos']
  const nombresPersonajes = ['ahsoka', 'anakin', 'batman']
  return (
    <React.Fragment>
      <Nav opciones={opciones}/>
      <Titulo />
      <main>
        <section className='top-data'>
          <Card titulo='Mi primer titulo' milanesa='Que rica milanesa' />
          <Card titulo='Otro titulo' milanesa='Otra milanesa' />
          <Card />
        </section>
      </main>
      {nombresPersonajes.map(personaje => <Characters name={personaje} />)}
    </React.Fragment>
  );
}

export default App;
