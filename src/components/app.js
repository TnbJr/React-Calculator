import React, { Component } from 'react'
import Calculator from '../containers/CalculatorFrame'
import '../styles/style.css'

export default class App extends Component {
  render() {
    return (
      <div className="container" id="app-container">	
      	<Calculator />
      </div>
    );
  }
}
