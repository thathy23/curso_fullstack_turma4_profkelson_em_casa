import React from 'react'

const Filme = (props) => {
  return (
    <div>
        
        <h3>{props.filme}</h3>
        <p>Diretor: {props.diretor}</p>
        <p>Ano:{props.ano}</p>        
    
    </div>
  )
}

export default Filme