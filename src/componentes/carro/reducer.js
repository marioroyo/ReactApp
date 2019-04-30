/* añadir o borrar del carro*/
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined
      ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
      : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
  }

const removeFromCart = (cart, item) => {
    return item.quantity === 1
      ? [ ...cartWithoutItem(cart, item) ] //si silo hay una sola unidad
      : [ ...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 } ]//si hay mas de una, se cambia la cantidad actual, quitando uno (-1)
  } 

  const removeAllFromCart = (cart, item) => {
    return [ ...cartWithoutItem(cart, item) ]
  }//para eliminar el carrro entero (remove all), no importa la cantidad de articulos que tenemos ya que vamos a deshacernos de todos ellos

const cartReducer = (state=[], action) => {
    switch(action.type) {
      case 'ADD':
        return addToCart(state, action.payload)
     
      case 'REMOVE':
        return removeFromCart(state, action.payload)

      case 'REMOVE_ALL':
        return removeAllFromCart(state, action.payload)

      default:
        return state;
    }
  }
  
  
  export default cartReducer