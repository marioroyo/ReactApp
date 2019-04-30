    
import { createStore, combineReducers } from 'redux'
import cartReducer from '../componentes/carro/reducer'
import { reducer as formReducer } from 'redux-form' //formularixuan checkouten, idatzi ahal izateko

const rootReducer = combineReducers({
  cart: cartReducer,
  form: formReducer, //formularixuan checkouten, idatzi ahal izateko
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store