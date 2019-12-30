import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

// Your API key is: 0061548e8f8f4df99281cc98786cb28a

class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=0061548e8f8f4df99281cc98786cb28a`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    
    this.setState({
      noticias: noticias.articles
    })
  }

  render() { 
    return ( 
      <>
        <Header
          titulo='Noticias React API' 
        />
        <div className="container white contendor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias} 
          />
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </>
     );
  }
}
 
export default App;
