import React from 'react'
import Cards from './components/Cards/Cards'

import Nav from './components/Nav/Nav'
import Characters from './components/Characters/Characters'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import SpecialButton from './components/SpecialButton/SpecialButton'

function App() {
  const opciones = ['pages','admin','tables', 'charts', 'Paseo de perritos', 'Otra opcion']

  const personajes = [
    'ahsoka',
    'anakin',
    'batman',
    'capAmerica',
    'cell',
    'hulkSmall',
    'kyloRen',
    'luke',
    'obiWan',
    'strange',
    'superman',
    'vegetta',
    'yoda'
  ]

  return (
    <React.Fragment>
      <Nav opciones={opciones} nombre={'Walter'}/>
      <SpecialButton />
      <main>
        <Cards />
        <Categories />
        <section className="card-container">
          {personajes.map((personaje, idx) => <Characters key={personaje + idx} name={personaje} />)}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
