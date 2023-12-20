import React from 'react'
import Puppy from './Puppy'


const data = {
    breed: "Cognis",
    age: "38"
}

function Dog() {

  return (
    <div>
        <Puppy breed="Nothing" age="1.5"></Puppy>
    </div>
  )
}

export default Dog
