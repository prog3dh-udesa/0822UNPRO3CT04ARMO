import React from 'react'

function Artist(props) {
  return (
    <div>{props.match.params.id}</div>
  )
}
export default Artist
