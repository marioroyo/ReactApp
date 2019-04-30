import React from 'react'

export default function AddButton(props) {
  return <button 
    onClick={() => props.addToCart(props.product)}>
    + ({
    (props.cartItem && props.cartItem.quantity) || 0 // si esta definido nos dara el numero de los productos selecionados sino 0
    })
</button>
}



