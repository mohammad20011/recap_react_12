import React from 'react';
import PageUn from './components/PageUn'
import PageDeux from './components/PageDeux'
import PageTrois from './components/PageTrois'
import PageQuatre from './components/PageQuatre'
import PageCinq from './components/PageCinq'
import PageSix from './components/PageSix'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {




  return(
    <Router>   
      <h1 className="bg-primary text-white text-center">Javascript DOM</h1>     
      <div className="text-center">
      <Link id="ex1" className="mx-3" to="/PageUn">Exercice 1</Link>
      <Link id="ex2" className="mx-3" to="/PageDeux">Exercice 2</Link>    
      <Link id="ex3" className="mx-3" to="/PageTrois">Exercice 3</Link>       
      <Link id="ex4" className="mx-3" to="/PageQuatre">Exercice 4</Link>       
      <Link id="ex5" className="mx-3" to="/PageCinq">Exercice 5</Link>       
      <Link id="ex6" className="mx-3" to="/PageSix">Exercice 6</Link>    
      </div>  
      <Switch>
        <Route path="/PageUn">
          <PageUn />
        </Route>
        <Route path="/PageDeux">
          <PageDeux />
        </Route>
        <Route path="/PageTrois">
          <PageTrois />
        </Route>
        <Route path="/PageQuatre">
          <PageQuatre />
        </Route>
        <Route path="/PageCinq">
        <PageCinq />
        </Route>
        <Route path="/PageSix">
          <PageSix />
        </Route>
      </Switch>     
    </Router>
  )
}


export default App;
