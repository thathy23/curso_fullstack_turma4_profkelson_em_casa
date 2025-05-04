import React from 'react'
import Receita from './Receita'

const ListaDeReceitas = () => {
    const receitas = [
        {
            nome: 'Bolo de Cenoura',
            ingredientes: 'cenoura, farinha, açúcar, ovos, óleo',
            modoPreparo: 'Bata os ingredientes no liquidificador, coloque em uma forma untada e leve ao forno pré-aquecido por 40 minutos',
            tempoPreparo: '50 minutos'
          },
          {
            nome: 'Feijoada',
            ingredientes: 'feijão preto, carne seca, linguiça, alho, cebola',
            modoPreparo: 'Cozinhe o feijão com as carnes e temperos até tudo estar bem macio. Sirva com arroz, couve e laranja',
            tempoPreparo: '2 horas'
          },
          {
            nome: 'Panqueca de Frango',
            ingredientes: 'farinha de trigo, leite, ovos, frango desfiado, molho de tomate',
            modoPreparo: 'Prepare a massa, recheie com frango e cubra com molho. Leve ao forno para gratinar',
            tempoPreparo: '45 minutos'
          },
          {
            nome: 'Escondidinho de Carne Seca',
            ingredientes: 'mandioca, carne seca, cebola, queijo ralado, creme de leite',
            modoPreparo: 'Cozinhe a mandioca e faça um purê. Refogue a carne e monte camadas com purê e carne. Finalize com queijo e leve ao forno',
            tempoPreparo: '1 hora e 10 minutos'
          }
    ]
  return (
    <div>
        <h1>Receitas mais pedidas</h1>
       {
         receitas.map((receita,index) => (

            <Receita key={index} nome={receita.nome} ingredientes={receita.ingredientes}
             modoPreparo={receita.modoPreparo} tempoPreparo={receita.tempoPreparo}/>
            
         ))
       }
    </div>
  )
}

export default ListaDeReceitas