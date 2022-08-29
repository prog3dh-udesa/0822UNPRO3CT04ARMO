import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Details from './screens/Details/Details'
import NotFound from './screens/NotFound/NotFound'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/details/:id' component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
