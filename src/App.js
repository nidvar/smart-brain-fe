import React from 'react';
import './App.css';

import Nav from './components/Nav';
import FaceRecog from './components/FaceRecog';
import Logo from './components/Logo';
import ImageForm from './components/ImageForm';
import Signin from './components/Signin';
import Register from './components/Register';




class App extends React.Component{
  state={
    input:'',
    url:'',
    data:[],
    width:0,
    loading_status:'INSERT LINK OF PICTURE FOR FACIAL RECOGNITION',
    route: 'signin',
    user:{
      id:'',
      name:'',
      email:'',
      entries:0
    },
    signin_status:null
  }
  onChange=(e)=>{
    this.setState(()=>{
      return {
        input: e.target.value
      }
    })
  }
  onRoutechange = (route)=>{
    this.setState({
      route:route,
      data:[],
      url:'',
      loading_status:'INSERT LINK OF PICTURE FOR FACIAL RECOGNITION'
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

    fetch(`http://localhost:3001/grab_api`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          user_input: this.state.input
      })
    }).then(a=>{
      console.log(a)
      return a.json()
    }).then((response) => {
        const number_of_faces = response.outputs[0].data
        fetch(`http://localhost:3001/profile/${this.state.user.id}`)
        .then(a=>{
          return a.json();
        })
        .then(a=>{
          this.setState(()=>{
            return {
              user:{
                id:this.state.user.id,
                name:this.state.user.name,
                email:this.state.user.email,
                entries: this.state.user.entries + 1
              }
            }
          })
        })
        this.setState(()=>{
          return {
            data:number_of_faces,
            loading_status:'Complete'
          }
        })
      }).catch((err) => {
        console.log(err);
        this.setState(()=>{
          return {
            loading_status:'Server API Error. Please logout and try again in a moment'
          }
        })
      });
  }
  grab_user=(user)=>{
    console.log(user)
    this.setState(()=>{
      return {
        user:{
          id:user.id,
          name:user.name,
          email:user.email,
          entries: parseInt(user.entries)
        }
      }
    })
  }
  grab_signin_result=(e)=>{
    this.setState(()=>{
      return {
        signin_status:e
      }
    })
  }
  clear_data = ()=>{
    this.setState(()=>{
      return {
        user:{
          id:'',
          name:'',
          email:'',
          entries:0
        }
      }
    })
  }
  display=()=>{
    if(this.state.route == 'signin'){
      return(
        <div>
          <Signin onRoutechange={this.onRoutechange} grab_signin_result={this.grab_signin_result} grab_user = {this.grab_user}/>
          <p className="signin_status">{this.state.signin_status}</p>
        </div>
      )
    }
    if(this.state.route == 'register'){
      return(
        <div>
          <Register onRoutechange={this.onRoutechange} grab_user = {this.grab_user}/>
        </div>
      )
    }
    if(this.state.route == 'home'){
      return(
        <div className="my_container">
          <div className="white_box">
          <p>Greetings {this.state.user.name}</p>
          <p>Number of searches: {this.state.user.entries}</p>
          <p>{this.state.loading_status}</p>
            <ImageForm grab_value={this.onChange} submit_form={this.onSubmit} />
          </div>
          <FaceRecog width={this.state.width} data={this.state.data} url={this.state.url} />
        </div>
      )
    }
  }
  render(){
    return (
      <div className="App">
        <div className="header">
          <Logo />
          <Nav onRoutechange={this.onRoutechange} route_status = {this.state.route} grab_signin_result={this.grab_signin_result} clear_data={this.clear_data}/>
        </div>
        {this.display()}
      </div>
    );
  }
}

export default App;