import React from 'react'
import ListaCategorias from '../assets/components/ListaCategorias'
import ListaPost from '../assets/components/ListaPosts'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/posts'} />
    </main>
  )
}

export default Home
