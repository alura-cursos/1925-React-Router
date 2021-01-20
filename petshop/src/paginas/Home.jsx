import React from 'react'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <section className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">Banho no cão</h2>
        <p className="cartao__texto">A maioria dos cães prefere pular a hora do banho, mas o banho desempenha um papel importante na saúde do pelo e da pele do seu cão, ajudando a mantê-lo limpo e livre de sujeira e parasitas. Ter os produtos certos pode ajudá-lo a se sentir mais confortável.</p>
      </article>
    </section>

    </main>
  )
}

export default Home
