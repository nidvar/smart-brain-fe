import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Nav from './components/Nav';
import FaceRecog from './components/FaceRecog';
import Logo from './components/Logo';
import ImageForm from './components/ImageForm';
import Particles from 'react-particles-js';
import clarifai_key from './api_keys/clarifai_key';

const particles = {
  number:{
    value:80,
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

const app = new Clarifai.App({
 apiKey: clarifai_key
});

class App extends React.Component{
  state={
    input:'',
    url:'',
    data:[],
    width:0,
    loading_status:''
  }
  onChange=(e)=>{
    console.log(e.target.value)
    this.setState(()=>{
      return {
        input: e.target.value
      }
    })
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.setState(()=>{
      return {
        url: this.state.input,
        width:document.getElementById('the_picture').width,
        loading_status:'Loading...'
      }
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input
      ).then((response) => {
        const number_of_faces = response.outputs[0].data
        console.log(response)
        this.setState(()=>{
          return {
            data:number_of_faces,
            loading_status:'LOADED!'
          }
        })
      }).catch((err) => {
        console.log(err);
      });
  }
  render(){
    return (
      <div className="App">
        <div className="header">
          <Logo />
          <Nav />
        </div>
        <div className="my_container">
          <ImageForm grab_value={this.onChange} submit_form={this.onSubmit}/>
          <Particles className="particles" params={{particles}} />
          <FaceRecog loading_status={this.state.loading_status} width={this.state.width} data={this.state.data} url={this.state.url} />
        </div>
      </div>
    );
  }
}

export default App;