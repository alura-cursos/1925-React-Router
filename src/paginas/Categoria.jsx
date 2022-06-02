import { Route, useParams , useRouteMatch , Link , Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { busca } from '../api/api'
import ListaCategorias from '../assets/components/ListaCategorias'
import ListaPost from '../assets/components/ListaPosts'
import '../assets/css/blog.css'
import SubCategoria from './Subcategoria'

const Categoria = () => {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id])
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subcategorias.map((subcategoria) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>
                {subcategoria}
              </Link>
            </li>
          ))

        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}
export default Categoria