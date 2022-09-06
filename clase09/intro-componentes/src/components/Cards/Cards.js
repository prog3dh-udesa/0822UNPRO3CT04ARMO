import React from 'react'
import Card from '../Card'

function Cards() {
  const tarjetas = [
    {
      id: 1,
      title:'Products in Database',
      price: '135',
      icon: 'clipboard-list'
    },
    {
      id: 2,
      title:'Amount in Products',
      price: '$645.634',
      icon: 'dollar-sign'
    },
    {
      id: 3,
      title:'Users Quantity',
      price: '90',
      icon: 'user-check'
    },
  ]

  return (
    <>
      <h1>My app in React</h1>
      <section className='top-data'>
        {tarjetas.map((tarjeta, idx) => <Card key={tarjeta.id + idx} info={tarjeta}/>)}
      </section>
    </>
  )
}

export default Cards
