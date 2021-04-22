import React from 'react';

class Register extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            name:''
        }
    }
    onEmailChange=(e)=>{
        this.setState(()=>{
            return {
                email: e.target.value
            }
        })
    }
    onPasswordChange=(e)=>{
        this.setState(()=>{
            return {
                password: e.target.value
            }
        })
    }
    onNameChange=(e)=>{
        this.setState(()=>{
            return {
                name: e.target.value
            }
        })
    }
    onRegister=(e)=>{
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:4,
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                entries: 0
            })
        })
        .then(a=>{
            return a.json();
        })
        .then(a=>{
            console.log(a)
            this.props.grab_user(a)
        })
    }
    render(){
        return(
            <div className="Signin">
                <div>
                    Name: <input onChange={this.onNameChange} /> <br />
                    <br />
                    Email: <input onChange={this.onEmailChange} /> <br />
                    <br />
                    Password: <input onChange={this.onPasswordChange} /> <br />
                    <br />
                    <button onClick={()=>{
                        this.onRegister()
                        this.props.onRoutechange('home')
                    }} >Register</button>
                </div>
            </div>
        )
    }
}

export default Register