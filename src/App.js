import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Logo from './components/Logo';
import ImageForm from './components/ImageForm';
import Particles from 'react-particles-js';

const particles = {
  number:{
    value:50,
    density:{
      enable:true,
      value_area:800
    },
  },
  line_linked: {
    shadow: {
      enable: true,
      color: "#000000",
      blur: 1
    }
  }
}

class App extends React.Component{
  state={
    input:''
  }
  onChange=(e)=>{
    console.log(e.target.value)
  }
  onSubmit=(e)=>{
    e.preventDefault()
    console.log('done')
  }
  render(){
    return (
      <div className="App">
        <Nav />
        <Logo />
        <ImageForm grab_value={this.onChange} submit_form={this.onSubmit}/>
        <Particles params={{particles}} />
      </div>
    );
  }
}

export default App;