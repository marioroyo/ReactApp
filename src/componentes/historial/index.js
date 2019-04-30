
import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios'
import Order from '../order'
import Pedidos from '../pedidos/index'



  class Blog extends Component {
    state = {
        posts: [],
        error: false
    }
  
    componentDidMount () {
        axios.get( '/posts.json' )
            .then( response => {
                //console.log( response );
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                posts = posts.slice(0, 50);
                console.log(posts);
                // const updatedPosts = posts.map(post => {
                //     return {
                //         ...post,
                //         author: 'Max'
                //     }
                // });
                this.setState({posts: posts});
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
                console.log(this.state.posts[0][0].cantidad);
            });
    }
  
  
    render () {
        
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Pedidos
                    idb={post.idb} 
                    precio={post.precio}
                    cantidad={post.cantidad}
                    usuario={post.usuario}
                    correo={post.correo} />;
                    
            });
        }
  
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
  }

export default Blog;