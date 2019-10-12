import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
//si se incluye el constructor, el elemento debe llevar el this para que respete las propiedades del elemento.
    this.state = {
      value: 0
    }
  }
//las funciones adicioneales, siempre va fuera del consutructor, ya que el mismo constructor es una funcion.
  incrementar = () => { 
    this.setState ({value: this.state.value + 1});
  }
  
  render() {
    return (
      <div>
        {/**con el {this.state.value} se llama el valor cargado en el estado */}
        <span className="value">{this.state.value}</span>
        {/**con el {this.incrementar} se llama la funcion y va cambiando de acuerdo a la accion de la función*/}
        <button id="inc" onClick={this.incrementar}>Incrementa</button>
      </div>
    );
  }
}

export default App;  