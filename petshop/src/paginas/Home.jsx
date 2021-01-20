import React from 'react'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaPost url={'/posts'} />
    </main>
    
  )
}

export default Home
