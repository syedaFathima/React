import { Component } from 'react';
import logo from './logo.svg';

import Validation from "./Validation/Validation"; 
import CharComponent from "./CharComponent/CharComponent";
import './App.css';


class App extends Component {

  state = { strLen: 0, char: ''}

  textLengthHandler =(event) => {
    console.log(event);
    const strLen = event.target.value.length;
    const str = event.target.value;

    this.setState({strLen: strLen, char: str});
  }

  deleteCharHandler = (index) => {
    const char = [...this.state.char];
    char.splice(index, 1);
    const charUpdated = char.join('');
    this.setState({char: charUpdated});
  }
  

  render() {
    let char = null;
    
    let charComp = null; 
  if(this.state.strLen) {
   char = [...this.state.char]
   console.log(char);
   charComp = 
   (
     <div>
       {
 char.map((char, index) => {
    return <CharComponent key={index} char={char} changed={() => this.deleteCharHandler(index)}/>
   }) 
  }
     </div>
    
   )
  }
   

  return (
    <div className="App">
      <input type="texr" onChange={this.textLengthHandler} value={this.state.char}/>
      <p>{this.state.strLen}</p>
      <Validation strlen={this.state.strLen}/>
      {charComp}
    </div>
  );
}
}

export default App;
