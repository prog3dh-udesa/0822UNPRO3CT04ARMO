import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './screens/Home/Home'

function App() {
  const opciones = ['pages','admin','tables', 'charts', 'Paseo de perritos', 'Otra opcion']

  return (
    <React.Fragment>
      <Nav opciones={opciones} nombre={'Walter'}/>
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
