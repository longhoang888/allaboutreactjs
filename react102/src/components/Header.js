import React from 'react'

function Header(props) {
    console.log(props)
  return (
    <div>
      This is company  Header with {props.name} and {props.color}
    </div>
  )
}

export default Header;
