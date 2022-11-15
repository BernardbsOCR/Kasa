import React from 'react'
import { useParams } from 'react-router-dom'

function FicheLogement({ updateNavLink }) {
  const { id } = useParams()

  updateNavLink('FicheLogement')

  return <div>FicheLogement {id}</div>
}

export default FicheLogement
