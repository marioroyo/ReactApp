import React from 'react'

import fetchApi from '../../modules/fetch-api'

import axios from '../../axios';
import { NavLink, withRouter } from 'react-router-dom'

class Order extends React.Component {
  state = {
    order: null,
    precio: 0,
    cantidad: 0,
    usuario: "",
    correo: ""
  }

  componentDidMount() {
    fetchApi("get", `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`)
      .then(json => {
        this.setState({
          order: json
        })
      })
  }

  postDataHandler = () => {
    const data = {
        precio: this.state.precio,
        cantidad: this.state.cantidad,
        usuario: this.state.usuario,
        correo: this.state.correo
    };
    axios.post('/posts.json', data)
        .then(response => {
            alert('muchas gracias por realizar el pedido');
            //console.log(response);
        }).catch(error => {
            // console.log(error);
            // this.setState({error: true});
            alert('Error order');
        });
}


  renderOrder() {
    const { name, email, order_items } = this.state.order
    var x = 0

    return <div>
      <h3>Informacion del pedido</h3>
      <div>Nombre: { name }</div>
      <div>Email: { email }</div>

      <h3>Compra final</h3>{this.state.usuario=name}
      <ul>
        {
          
          order_items && order_items.map(item => {
            const { product, qty, product: { name, image, price } } = item    
                 x= x + parseFloat(qty) * parseFloat(price)
                 this.state.cantidad=this.state.cantidad + parseFloat(qty)
                 this.state.precio=this.state.precio + parseFloat(qty) * parseFloat(price)
                 this.state.correo=email
            return <div>
              <b>{name}</b> &nbsp;&nbsp;&nbsp;&nbsp;<br></br>
              Numero de unidades: {qty} &nbsp;&nbsp;
              __________ {parseFloat(qty) * parseFloat(price)} €&nbsp;&nbsp;<br></br><br></br>  
                                                                           
            </div>
            
          })
        }
      </ul>
      <div><ul><b>&nbsp;&nbsp;&nbsp;&nbsp;PRECIO TOTAL: { x.toFixed(2)} €</b></ul></div>

      <button onClick={this.postDataHandler}><NavLink to='/'>Confirmar pedido</NavLink></button>
    </div>
  }//Numero de unidades: {qty} @ ${price} = ${parseFloat(qty) * parseFloat(price)}
  //<img src={image} width={32} />

  render() {
    const { order } = this.state
    return <div>
      {
        order ? this.renderOrder() : "Loading...."
      }
    </div>
  }
}

export default Order