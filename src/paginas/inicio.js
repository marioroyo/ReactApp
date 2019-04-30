import React from 'react'
import ProductList from '../componentes/listaProductos'

import data from '../datuBase/productos.json'

export default function inicio(props) {
  return <div>
    <h1>Inicio</h1>
    <ProductList products={data.products} />

    </div>
    //berdinketa hau eginez products-en basedatuko productuen arraia esleituko zaio
}