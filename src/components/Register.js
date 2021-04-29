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
        let emailvalidation = this.state.email.split('');

        if(this.state.password.length < 8){
            console.log(this.state.password.length)
            this.props.grab_signin_result('password too short')
            return
        }
        if(!emailvalidation.includes('@') || !emailvalidation.includes('.')){
            this.props.grab_signin_result('please enter valid email')
            return
        }

        fetch('https://fierce-everglades-53575.herokuapp.com/https://polar-plateau-44003.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
            this.props.onRoutechange('home')
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
                    Password: <input onChange={this.onPasswordChange} type="password"/> <br />
                    <br />
                    <button onClick={()=>{
                        this.onRegister()
                    }} >Register</button>
                </div>
            </div>
        )
    }
}

export default Register