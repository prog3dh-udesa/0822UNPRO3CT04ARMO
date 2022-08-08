import React from 'react'

function Characters(props) {
  return (
    <div className="character-card">
          <img src={`./characters/characters/${props.name}.jpg`} alt="" />
          <h4>Character Name</h4>
          <p>Character description</p>
          <p>Lorem ipsum</p>
          <a href="#">Ver más</a>
    </div>

  )
}

export default Characters 