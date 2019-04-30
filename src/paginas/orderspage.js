import React from 'react'
import Order from '../componentes/order'

export default function OrdersPage(props) {
  return <div>
    <h2>Mi Compra</h2>
    <Order id={props.match.params.id} />
  </div>
}