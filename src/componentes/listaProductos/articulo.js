import React from 'react'
import AddBtn from './sumar'
import RemoveBtn from './restar'

export default function ProductListItem(props) {
  return <div className='product-list-item'>
    <h3>{props.product.name}</h3>
    <img
      height={100}
      title={props.product.name}
      src={`/productos/${props.product.image}`}//producto.json-en imagenan helbidia baitdau
    />
    <div>{ props.product.description }</div>
    <div>{ props.product.price } €</div>
    <div>

    <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
    />

      { //para que solo aparezca el boton de remove una vez que se hay seleccionado algun articulo
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
          : null
      }

    </div>
  </div>//se define la informacion que queramos visualizar de cada producto
}