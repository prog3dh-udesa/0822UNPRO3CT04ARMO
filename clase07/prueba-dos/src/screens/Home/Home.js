import React from 'react'
import {Link} from 'react-router-dom'

let objeto ={
    id: 10
}
function Home() {
  return (
    <>
        <div>Home</div>
        <Link to={`/artist/${objeto.id}`}>Detalle de artista</Link>
    </>
  )
}
export default Home
