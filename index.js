import React, { Component } from 'react';
import { render } from "react-dom";
import "./style.css";
 
import React from 'react';
 
import React from 'react';
  
  class Computador extends React.Component {
    constructor (props){ 
      super(props);
      this.state = {processador: "Intel Core i5-7200u" ,memoria: "16gb", HD: "500gb", cor: "black"};
    }
  mudacomputador = () => {
    this.setState({cor: 'Blueish'});
    this.setState({memoria: '16gb'});
    this.setState({processador: 'Intel Core I7 8th Gen'});
    this.setState({HD: '2 Tb'});
  }
    render () {
      return (
      <div> 
      
      <h1>Exemplo com props:</h1>
      <h2> Specs do PC do Gritti!:</h2> 
      <h3> Eu tenho um computador da cor: {this.props.cor }</h3> 
      <h3> A memoria do meu computador é de: {this.props.memoria} RAM </h3> 
      <h3> O processador do meu computador é um: {this.props.processador} </h3>
      <h3> O HD do meu computador é de: {this.props.HD} </h3>
      
      <h1>Exemplo com states:</h1>
      <h2> Specs do PC do Gritti!:</h2> 
      <h3> Eu tenho um computador da cor: {this.state.cor }</h3> 
      <h3> A memoria do meu computador é de: {this.state.memoria} RAM  </h3> 
      <h3> O processador do meu computador é um: {this.state.processador} </h3>
      <h3> O HD do meu computador é de: {this.state.HD} </h3>
      
      <button type='buton' onClick={this.mudacomputador}>Mudar Computador</button>

      </div>
      );
    }
  }
function Monitor (props) { 
  return(
    <div>
    
    <h2> Monitor do Gritti!: </h2> 
    <h3> As polegadas do monitor sao: {props.polegadas} </h3> 
    <h3> A marca do meu monitor é: {props.marca} </h3>
   
    </div>
  );
}
 
class App extends Component {
  constructor () {
    super();
    this.state ={
    name: "React", 
    marca : "Dell",
    polegadas : "13pl"
  };
}

 mudarmonitor = () => {
    this.setState({polegadas: '21'});
    this.setState({marca: 'Samsung'});
  }
 
 render() {
    return (
      <div>
        
        <Computador processador = 'Intel Core i9 9th gen 8 cores' memoria = '32gb' HD = '250gb' cor = 'Yellowish'/>
        
        <Monitor polegadas={this.state.polegadas} marca={this.state.marca}/>
       
        <button type='buton' onClick={this.mudarmonitor}>Mudar Monitor</button>
      
      </div>
    );
  }
}
 
render (<App />, document.getElementById ("root"));