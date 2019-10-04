import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    const increment = document.querySelector('.js-increment');
    if(increment) {
      increment.addEventListener('click', this.onIncrementClick);
    }
  }

  onIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <div className='counter'>
          <div className='counter__state'>
            {this.state.counter}
          </div>
          <div className='coutner__buttons'>
            <button
              className='js-increment'
              primary={true}
            >
              Incrementa
            </button>
          </div>
        </div>
      </div>
    );
  }
}


/*  
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,

    }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc">Incrementa</button>
      </div>
    );
  }
}*/


//this.setState({value: this.state.value + 1,});

export default App;