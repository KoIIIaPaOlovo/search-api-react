import React from "react"
import logo from './logo.svg';
import './App.css';
import Search from "./search"
import ImageOutput from "./imageOutput"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imagesSrc:[]
    }
    this.changeImagesSrc = this.changeImagesSrc.bind(this);
  }
  
  render(){
    return (
      <div>
      <Search changeImagesSrc={this.changeImagesSrc}/>
      <ImageOutput imagesSrc={this.state.imagesSrc}/>
      </div>
    );
  }

  changeImagesSrc(imagesArray){
    this.setState({imagesSrc: imagesArray})
    console.dir(this.state.imagesSrc)
  }
}

export default App;
