import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import { Switch } from 'react-router-dom'
import Cabecalho from './assets/components/Cabecalho'

function App() {
  return (
  <Router>
    <Cabecalho />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sobre'>
        <Sobre />
      </Route>
      {/* Rota padrão */}
      <Route>
        <Pagina404 />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
