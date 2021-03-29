import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Nav from './components/Nav';
import FaceRecog from './components/FaceRecog';
import Logo from './components/Logo';
import ImageForm from './components/ImageForm';
import Signin from './components/Signin';
import clarifai_key from './api_keys/clarifai_key';

const app = new Clarifai.App({
 apiKey: clarifai_key
});

class App extends React.Component{
  state={
    input:'',
    url:'',
    data:[],
    width:0,
    loading_status:'INSERT LINK OF PICTURE FOR FACIAL RECOGNITION',
    route: 'signin'
  }
  onChange=(e)=>{
    console.log(e.target.value)
    this.setState(()=>{
      return {
        input: e.target.value
      }
    })
  }
  onRoutechange = (route)=>{
    this.setState({route:route})
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
          <Nav onRoutechange={this.onRoutechange} />
        </div>
        {this.state.route == 'signin'?
          <div>
            <Signin onRoutechange={this.onRoutechange} />
          </div>
        :
          <div className="my_container">
            <div className="white_box">
            <p>{this.state.loading_status}</p>
              <ImageForm grab_value={this.onChange} submit_form={this.onSubmit} />
            </div>
            <FaceRecog width={this.state.width} data={this.state.data} url={this.state.url} />
          </div>
        }
        
      </div>
    );
  }
}

export default App;