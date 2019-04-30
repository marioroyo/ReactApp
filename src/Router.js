import React from 'react'
import { Switch, Route } from 'react-router-dom'

import inicio from './paginas/inicio'
import carro from './paginas/carro'
import CheckoutPage from './paginas/checkoutpage'
import OrdersPage from './paginas/orderspage'
import HistorialPage from './paginas/historial'

const routes = () => (
    <Switch>
      <Route exact path='/' component={inicio}></Route>
      <Route exact path='/carro' component={carro}></Route>
      <Route exact path='/checkout' component={CheckoutPage}></Route>
      <Route path='/orders/:id' component={OrdersPage} />
      <Route exact path='/historial' component={HistorialPage}></Route>
    </Switch>
  )
  
  export default routes