import React from 'react'
import Cart from '../componentes/carro'

import ProductList from '../componentes/listaProductos'
import data from '../datuBase/productos.json'

export default function Carro(props) {
  return <div>
    <h2>Mi carro</h2>
    <Cart products={data.products}/>
  </div>
}