import React from 'react'

const Receita = (props) => {
  return (
    <div>
        <h2>{props.nome}</h2>
        <p>Ingredientes: {props.ingredientes}.</p>
        <p>Modo de preparo: {props.modoPreparo}.</p>
        <p>Tempo de Preparo:{props.tempoPreparo}.</p>        
    </div>
  )
}

export default Receita