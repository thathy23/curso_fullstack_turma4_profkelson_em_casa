import React from 'react'
import Filme from './Filme'


const ListaDeFilmes = () => {

    const filmes = [
        { filme: 'Central do Brasil', diretor: 'Walter Salles', ano: '1998' },
        { filme: 'Cidade de Deus', diretor: 'Fernando Meirelles', ano: '2002' },
        { filme: 'Tropa de Elite', diretor: 'José Padilha', ano: '2007' },
        { filme: 'Que Horas Ela Volta?', diretor: 'Anna Muylaert', ano: '2015' },
        { filme: 'Bacurau', diretor: 'Kleber Mendonça Filho', ano: '2019' }
    ]
 
  return (
    <div>
        <h1>Top 5 filmes nacionais:</h1>
        {
            filmes.map((item, index) => (
                <Filme key={index} filme={item.filme} diretor={item.diretor} ano={item.ano} />
            ))
        }

    </div>
  )
}

export default ListaDeFilmes