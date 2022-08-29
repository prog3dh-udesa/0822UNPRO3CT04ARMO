import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Gallery from './screens/Gallery/Gallery';
import Artist from './screens/Artist/Artist';
import NotFound from './screens/Notfound/NotFound';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/artist/:id' component={Artist} /> 
        <Route path='' component={NotFound}/>   
      </Switch>
    </div>
  );
}

export default App;
