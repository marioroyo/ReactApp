import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from 'react-router-dom'


function CheckoutForm(props) {
  const { handleSubmit } = props

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="order[name]">Your name:</label><br/>
        <Field name="order[name]" component="input" type="text" />
      </div>

      <div>
        <label htmlFor="order[email]">Email:</label><br/>
        <Field name="order[email]" component="input" type="email" />
      </div>

      <div>
        <button type="submit" 
            onClick={e => window.confirm("¿Estás seguro que desea realizar el pedido?") && this.deleteItem(e)}
            >Realizar pedido</button>
                
      </div>
      <div>
        <button type="submit" ><NavLink to='/'>Volver</NavLink></button>
        
      </div>
    </form>
  </div>
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)

export default CheckoutForm