import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './articulo'
import { cartItemsWithQuantities } from '../carro'

//import './styles.css'

function ProductList(props) {
  return <div className="product-listing">  
    {
      props.products.map( product =>
        <ProductListItem 
          key={product.id}          
          product={product} 
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />)
    }
  </div>//consistira en crear una lista de productos 
        //donde se visualizaran todos los productos
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,/* De esta manera podemos realizar props.cart */
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item }) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
/*Connect une las dos funciones y pasa una nueva funcion al componente productlist*/
