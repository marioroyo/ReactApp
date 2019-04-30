import React, {Component} from 'react'
import axios from '../../axios'
import './pedidos.css';

//css box-shadow
class pedidos extends React.Component {

    deleteUpdatePostHandler = () => {
        axios.delete('/posts/' + this.props.idb + '.json')
            .then(response => {
                console.log('He borrado'+this.props.idb);
            });
    }
    
    render(){

        

        return(
            <div className="pedidos">

                Nombre: {this.props.usuario} <br></br>
                Correo: {this.props.correo} <br></br>
                Precio: {this.props.precio} €<br></br>
                Cantidad: {this.props.cantidad} <br></br>
                <button onClick={e => window.confirm("¿Estás seguro que desea realizar el pedido?") && this.deleteUpdatePostHandler(e)} >delete</button>
                <br></br><br></br>
            </div>    
                
                
                
           
        );
    }

}
export default pedidos