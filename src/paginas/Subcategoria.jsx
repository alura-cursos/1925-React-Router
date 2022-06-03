import React from 'react'
import { useParams } from 'react-router-dom'
import ListaPost from '../assets/components/ListaPosts'
const SubCategoria = () => { 
  const { subcategoria } = useParams()
  return(
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategoria